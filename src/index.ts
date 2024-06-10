const CENTER_COORDINATE: [number, number] = [14.656126099446102, 121.06746536690618];

namespace Raw {
  export interface Point {
      latE7: number;
      lngE7: number;
  }

  export interface SimplifiedRawPath {
      points: Point[];
  }

  export type Confidence = 'LOW' | 'MEDIUM' | 'HIGH' | 'UNKNOWN_CONFIDENCE';

  export interface ActivitySegment {
      confidence: Confidence;
      simplifiedRawPath?: SimplifiedRawPath;
  }

  export interface PlaceVisit {
      centerLatE7: number;
      centerLngE7: number;
      locationConfidence: number;
  }

  export interface TimelineObject {
      activitySegment?: ActivitySegment;
      placeVisit?: PlaceVisit;
  }

  export interface SemanticLocationHistory {
      timelineObjects: TimelineObject[];
  }
}

namespace Processed {
  export interface Point {
      latitude: number;
      longitude: number;
  }
}

function isPoint(point: any): point is Raw.Point {
  return typeof point.latE7 === 'number' && typeof point.lngE7 === 'number';
}

function isSimplifiedRawPath(path: any): path is Raw.SimplifiedRawPath {
  return Array.isArray(path.points) && path.points.every(isPoint);
}

function isActivitySegment(segment: any): segment is Raw.ActivitySegment {
  const validConfidence = ['LOW', 'MEDIUM', 'HIGH', 'UNKNOWN_CONFIDENCE'].includes(segment.confidence);
  if (segment.simplifiedRawPath) {
    return validConfidence && isSimplifiedRawPath(segment.simplifiedRawPath);
  } else {
    return validConfidence;
  }
}

function isPlaceVisit(visit: any): visit is Raw.PlaceVisit {
  return typeof visit.centerLatE7 === 'number' &&
         typeof visit.centerLngE7 === 'number' &&
         typeof visit.locationConfidence === 'number';
}

function validateTimelineObject(timelineObject: any): timelineObject is Raw.TimelineObject {
  if (typeof timelineObject !== 'object' || timelineObject === null) {
      return false;
  }

  if (timelineObject.activitySegment && isActivitySegment(timelineObject.activitySegment)) {
      return true;
  }

  if (timelineObject.placeVisit && isPlaceVisit(timelineObject.placeVisit)) {
      return true;
  }

  return false;
}

async function* parseFiles(files: FileList | null): AsyncIterableIterator<Raw.TimelineObject> {
  if (!files || files.length === 0) {
    return alert('No files selected.');
  }

  for (let file of Array.from(files)) {
    if (file.type === 'application/json') {
      try {
        const content = await file.text();
        const json: Raw.SemanticLocationHistory = JSON.parse(content);

        if (json.timelineObjects && Array.isArray(json.timelineObjects)) {
          yield* json.timelineObjects;
        }
      } catch (e) {
        console.error('Error parsing JSON in file:', file.name, e);
      }
    } else {
      console.warn('Skipping non-JSON file:', file.name);
    }
  }
}

function* getCoordinates(data: Iterable<Raw.TimelineObject>): IterableIterator<Processed.Point> {
  for (const timelineObject of data) {
    if (!validateTimelineObject(timelineObject)) {
      continue;
    }

    if (timelineObject.activitySegment) {
      const activitySegment = timelineObject.activitySegment;
      if (activitySegment.confidence === 'LOW' || activitySegment.confidence === 'UNKNOWN_CONFIDENCE') {
        continue;
      }
      if (!activitySegment.simplifiedRawPath?.points) {
        continue;
      }
      for (const point of activitySegment.simplifiedRawPath?.points) {
        yield { latitude: point.latE7 / 10 ** 7, longitude: point.lngE7 / 10 ** 7 };
      }
    }

    if (timelineObject.placeVisit) {
      const placeVisit = timelineObject.placeVisit;
      if (placeVisit.locationConfidence > 30) {
        yield { latitude: placeVisit.centerLatE7 / 10 ** 7, longitude: placeVisit.centerLngE7 / 10 ** 7 };
      }
    }
  }
}

const processFilesButton = document.getElementById('processFiles') as HTMLButtonElement;
const fileInput = document.getElementById('fileInput') as HTMLInputElement;
const output = document.getElementById('output') as HTMLPreElement;

processFilesButton.addEventListener('click', async () => {
  if (!fileInput.files || fileInput.files.length === 0) {
    alert('No files selected.');
    return;
  }

  const timelineObjects = new Array<Raw.TimelineObject>();

  for await (const timelineObject of parseFiles(fileInput.files)) {
    timelineObjects.push(timelineObject)
  }

  const map = L.map('map').setView(CENTER_COORDINATE, 16);

  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  }).addTo(map);

  const boundaryPolygon = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Polygon",
      "coordinates": [[[121.055669, 14.655191], [121.070477, 14.664868], [121.074169, 14.66329], [121.075993, 14.659573], [121.074319, 14.657808], [121.074061, 14.648442], [121.072625, 14.648322], [121.070774, 14.647418], [121.06806, 14.647387], [121.066064, 14.648114], [121.065382, 14.647938], [121.064073, 14.647792], [121.061186, 14.6472], [121.060081, 14.647533], [121.058336, 14.654633], [121.055686, 14.654467], [121.055669, 14.655191]]]
    }
  };

  const coordinates = Array.from(getCoordinates(timelineObjects));

  const worker = new Worker('worker.js');
  worker.postMessage({ points: coordinates, boundaryPolygon });

  worker.onmessage = function (event) {
    const turfPolygon = event.data;

    L.geoJSON(turfPolygon.geometry, {
      style: {
        "color": "#ffffff",
        "weight": 0,
        "fillOpacity": 0.9
      }
    }).addTo(map);
  };
});