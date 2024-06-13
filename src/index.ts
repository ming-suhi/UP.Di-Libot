/**
 * Coordinate of the center of the map
 */
const CENTER_COORDINATE: [number, number] = [14.656126099446102, 121.06746536690618];

/**
 * Polygon representation of the boundary
 */
const BOUNDARY = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Polygon",
    "coordinates": [[[121.070598,14.643947],[121.074058,14.647051],[121.074348,14.647046],[121.074321,14.647456],[121.076215,14.649543],[121.076204,14.652975],[121.074348,14.652944],[121.074261,14.6574],[121.07439,14.6578],[121.076204,14.659415],[121.07623,14.659596],[121.074793,14.662346],[121.073886,14.663452],[121.071541,14.664355],[121.069567,14.663888],[121.068778,14.663903],[121.065346,14.661837],[121.063087,14.660279],[121.062963,14.661691],[121.061783,14.661733],[121.06079,14.661909],[121.047994,14.662148],[121.047962,14.662034],[121.04882,14.661723],[121.048713,14.661235],[121.04918,14.660466],[121.052638,14.658157],[121.052724,14.657638],[121.052316,14.656906],[121.053034,14.656299],[121.053131,14.65577],[121.054145,14.654083],[121.057053,14.654701],[121.058394,14.654706],[121.059815,14.647819],[121.060179,14.647294],[121.060775,14.647087],[121.06225,14.647253],[121.063871,14.647647],[121.065067,14.647642],[121.065727,14.647896],[121.066167,14.647902],[121.067878,14.647175],[121.067926,14.646599],[121.068221,14.645929],[121.070598,14.643947]]]
  }
}

/**
 * Polygon representations of the institutes
 */
const INSTITUTES = [
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.060807,14.66025],[121.060807,14.661246],[121.061922,14.661246],[121.061922,14.66025],[121.060807,14.66025]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.062298,14.658911],[121.062298,14.659658],[121.063499,14.659658],[121.063499,14.658911],[121.062298,14.658911]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.063821,14.657743],[121.063821,14.658579],[121.064674,14.658579],[121.064674,14.657743],[121.063821,14.657743]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.065329,14.657644],[121.065329,14.658324],[121.066412,14.658324],[121.066412,14.657644],[121.065329,14.657644]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.070774,14.657702],[121.070774,14.658252],[121.071455,14.658252],[121.071455,14.657702],[121.070774,14.657702]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.059884,14.656088],[121.059884,14.656819],[121.060951,14.656819],[121.060951,14.656088],[121.059884,14.656088]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.061177,14.656928],[121.061177,14.657587],[121.062174,14.657587],[121.062174,14.656928],[121.061177,14.656928]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.062582,14.656788],[121.062582,14.657427],[121.063231,14.657427],[121.063231,14.656788],[121.062582,14.656788]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.063778,14.656928],[121.063778,14.657556],[121.06424,14.657556],[121.06424,14.656928],[121.063778,14.656928]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.064315,14.656985],[121.064315,14.657354],[121.064744,14.657354],[121.064744,14.656985],[121.064315,14.656985]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.064267,14.656477],[121.064267,14.656944],[121.064712,14.656944],[121.064712,14.656477],[121.064267,14.656477]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.065216,14.65644],[121.065216,14.656856],[121.065736,14.656856],[121.065736,14.65644],[121.065216,14.65644]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.068703,14.656217],[121.068703,14.65683],[121.070387,14.65683],[121.070387,14.656217],[121.068703,14.656217]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.070768,14.656928],[121.070768,14.657416],[121.071503,14.657416],[121.071503,14.656928],[121.070768,14.656928]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.070758,14.656311],[121.070758,14.656835],[121.071503,14.656835],[121.071503,14.656311],[121.070758,14.656311]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.071895,14.656882],[121.071895,14.657214],[121.072388,14.657214],[121.072388,14.656882],[121.071895,14.656882]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.071712,14.656326],[121.071712,14.656887],[121.07263,14.656887],[121.07263,14.656326],[121.071712,14.656326]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.072844,14.656882],[121.072844,14.657271],[121.073263,14.657271],[121.073263,14.656882],[121.072844,14.656882]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.073016,14.655994],[121.073016,14.656466],[121.073488,14.656466],[121.073488,14.655994],[121.073016,14.655994]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.065039,14.654302],[121.065039,14.655486],[121.065248,14.655486],[121.065248,14.654302],[121.065039,14.654302]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.070854,14.65451],[121.070854,14.655527],[121.07145,14.655527],[121.07145,14.65451],[121.070854,14.65451]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.073263,14.654951],[121.073263,14.655532],[121.073858,14.655532],[121.073858,14.654951],[121.073263,14.654951]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.073375,14.653825],[121.073375,14.654614],[121.073949,14.654614],[121.073949,14.653825],[121.073375,14.653825]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.06123,14.652154],[121.06123,14.652704],[121.062282,14.652704],[121.062282,14.652154],[121.06123,14.652154]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.06248,14.652413],[121.06248,14.652813],[121.063435,14.652813],[121.063435,14.652413],[121.06248,14.652413]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.067496,14.653114],[121.067496,14.653534],[121.068456,14.653534],[121.068456,14.653114],[121.067496,14.653114]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.067174,14.652434],[121.067174,14.652849],[121.067721,14.652849],[121.067721,14.652434],[121.067174,14.652434]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.068837,14.653134],[121.068837,14.653731],[121.070618,14.653731],[121.070618,14.653134],[121.068837,14.653134]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.06874,14.652512],[121.06874,14.65315],[121.070629,14.65315],[121.070629,14.652512],[121.06874,14.652512]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.070811,14.6526],[121.070811,14.652984],[121.071557,14.652984],[121.071557,14.6526],[121.070811,14.6526]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.071739,14.652678],[121.071739,14.653254],[121.072732,14.653254],[121.072732,14.652678],[121.071739,14.652678]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.073016,14.652579],[121.073016,14.653446],[121.074073,14.653446],[121.074073,14.652579],[121.073016,14.652579]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.067249,14.651302],[121.067249,14.652138],[121.068462,14.652138],[121.068462,14.651302],[121.067249,14.651302]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.07286,14.651515],[121.07286,14.652299],[121.073799,14.652299],[121.073799,14.651515],[121.07286,14.651515]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.068896,14.650119],[121.068896,14.651084],[121.069331,14.651084],[121.069331,14.650119],[121.068896,14.650119]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.070344,14.650405],[121.070344,14.651214],[121.071138,14.651214],[121.071138,14.650405],[121.070344,14.650405]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.071299,14.650565],[121.071299,14.650882],[121.07197,14.650882],[121.07197,14.650565],[121.071299,14.650565]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.072716,14.650607],[121.072716,14.651095],[121.073558,14.651095],[121.073558,14.650607],[121.072716,14.650607]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.068038,14.649117],[121.068038,14.649989],[121.068601,14.649989],[121.068601,14.649117],[121.068038,14.649117]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.069229,14.648993],[121.069229,14.649507],[121.069749,14.649507],[121.069749,14.648993],[121.069229,14.648993]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.070999,14.649564],[121.070999,14.649906],[121.071444,14.649906],[121.071444,14.649564],[121.070999,14.649564]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.067448,14.647763],[121.067448,14.648521],[121.068263,14.648521],[121.068263,14.647763],[121.067448,14.647763]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.068349,14.648303],[121.068349,14.648936],[121.068821,14.648936],[121.068821,14.648303],[121.068349,14.648303]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.069159,14.64769],[121.069159,14.648417],[121.069872,14.648417],[121.069872,14.64769],[121.069159,14.64769]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.071042,14.64824],[121.071042,14.648905],[121.072211,14.648905],[121.072211,14.64824],[121.071042,14.64824]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.072576,14.648593],[121.072576,14.649527],[121.073617,14.649527],[121.073617,14.648593],[121.072576,14.648593]]]}},
]

/**
 * Polygon representations of the dorms
 */
const DORMS = [
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.067496,14.658407],[121.067496,14.658719],[121.068392,14.658719],[121.068392,14.658407],[121.067496,14.658407]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.067153,14.657702],[121.067153,14.658195],[121.068365,14.658195],[121.068365,14.657702],[121.067153,14.657702]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.06874,14.658563],[121.06874,14.659092],[121.069357,14.659092],[121.069357,14.658563],[121.06874,14.658563]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.068746,14.657722],[121.068746,14.658387],[121.069567,14.658387],[121.069567,14.657722],[121.068746,14.657722]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.069652,14.657691],[121.069652,14.65833],[121.070532,14.65833],[121.070532,14.657691],[121.069652,14.657691]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.073027,14.659118],[121.073027,14.65972],[121.073949,14.65972],[121.073949,14.659118],[121.073027,14.659118]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.070157,14.651432],[121.070157,14.652387],[121.070672,14.652387],[121.070672,14.651432],[121.070157,14.651432]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.070731,14.651941],[121.070731,14.65232],[121.071664,14.65232],[121.071664,14.651941],[121.070731,14.651941]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.062453,14.647887],[121.062453,14.648557],[121.062834,14.648557],[121.062834,14.647887],[121.062453,14.647887]]]}},
]

/**
 * Polygon representations of the attractions
 */
const ATTRACTIONS = [
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.050968,14.65862],[121.050968,14.661443],[121.054637,14.661443],[121.054637,14.65862],[121.050968,14.65862]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.065795,14.656357],[121.065795,14.657209],[121.06645,14.657209],[121.06645,14.656357],[121.065795,14.656357]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.066858,14.65642],[121.066858,14.657115],[121.067244,14.657115],[121.067244,14.65642],[121.066858,14.65642]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.064444,14.654728],[121.064444,14.654998],[121.064969,14.654998],[121.064969,14.654728],[121.064444,14.654728]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.066493,14.654603],[121.066493,14.655465],[121.067609,14.655465],[121.067609,14.654603],[121.066493,14.654603]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.066632,14.653088],[121.066632,14.653482],[121.067051,14.653482],[121.067051,14.653088],[121.066632,14.653088]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.072254,14.65095],[121.072254,14.651251],[121.072619,14.651251],[121.072619,14.65095],[121.072254,14.65095]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.071675,14.649465],[121.071675,14.650036],[121.072222,14.650036],[121.072222,14.649465],[121.071675,14.649465]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.074711,14.649403],[121.074711,14.651583],[121.07558,14.651583],[121.07558,14.649403],[121.074711,14.649403]]]}},
]

/**
 * Polygon representations of the services
 */
const SERVICES = [
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.07146,14.660457],[121.07146,14.661205],[121.072319,14.661205],[121.072319,14.660457],[121.07146,14.660457]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.067373,14.65972],[121.067373,14.66052],[121.068317,14.66052],[121.068317,14.65972],[121.067373,14.65972]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.07057,14.659575],[121.07057,14.660115],[121.071492,14.660115],[121.071492,14.659575],[121.07057,14.659575]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.059498,14.652143],[121.059498,14.652776],[121.060377,14.652776],[121.060377,14.652143],[121.059498,14.652143]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.064508,14.652226],[121.064508,14.652569],[121.065055,14.652569],[121.065055,14.652226],[121.064508,14.652226]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.065999,14.651344],[121.065999,14.651801],[121.066825,14.651801],[121.066825,14.651344],[121.065999,14.651344]]]}},
    {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[121.062437,14.651489],[121.062437,14.652216],[121.063387,14.652216],[121.063387,14.651489],[121.062437,14.651489]]]}},
]

/**
 * Checks whether an object is a valid point object
 */
function isPoint(point: any): point is Raw.Point {
  return typeof point.latE7 === 'number' && typeof point.lngE7 === 'number';
}

/**
 * Checks whether an object is a valid simplified raw path object
 */
function isSimplifiedRawPath(path: any): path is Raw.SimplifiedRawPath {
  return Array.isArray(path.points) && path.points.every(isPoint);
}

/**
 * Checks whether an object is a valid activity segment object
 */
function isActivitySegment(segment: any): segment is Raw.ActivitySegment {
  const validConfidence = ['LOW', 'MEDIUM', 'HIGH', 'UNKNOWN_CONFIDENCE'].includes(segment.confidence);
  if (segment.simplifiedRawPath) {
    return validConfidence && isSimplifiedRawPath(segment.simplifiedRawPath);
  } else {
    return validConfidence;
  }
}

/**
 * Checks whether an object is a valid place visit object
 */
function isPlaceVisit(visit: any): visit is Raw.PlaceVisit {
  return typeof visit.centerLatE7 === 'number' && typeof visit.centerLngE7 === 'number' && typeof visit.locationConfidence === 'number';
}

/**
 * Checks whether an object is a valid timeline object
 */
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

/**
 * Reads the uploaded files and transforms the data to JS objects
 * @param files Files uploaded by the user
 */
async function* parseFiles(files: FileList): AsyncIterableIterator<Raw.TimelineObject> {
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

/**
 * Pre-processes the data to become usable
 * @param data Raw data read from the uploaded files
 */
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

// Main interface
const fileInput = document.getElementById('fileInput') as HTMLInputElement;

// Initalize the map on the div with id "map"
const map = L.map('map').setView(CENTER_COORDINATE, 16);

// Add the base layer(ESRI World Imagery Tile) to the map
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);

const checkbox = document.getElementById("agreed") as HTMLInputElement;
const fileLabel = document.querySelector(".file-label") as HTMLLabelElement;

fileLabel.style.pointerEvents = "none";

checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        fileLabel.style.pointerEvents = "auto";
    } else {
        fileLabel.style.pointerEvents = "none";
    }
});

const overlay = document.querySelector("#overlay") as HTMLDivElement;
const loading = document.querySelector("#loading") as HTMLDivElement;
const ui = document.querySelector("#prompt") as HTMLDivElement;

fileInput.addEventListener('change', async () => {
  if (!fileInput.files || fileInput.files.length === 0) {
    alert('No files selected.');
    return;
  }

  ui.style.display = "none";
  loading.style.display = "flex";

  // Process the files
  const timelineObjects = new Array<Raw.TimelineObject>();

  for await (const timelineObject of parseFiles(fileInput.files)) {
    timelineObjects.push(timelineObject)
  }

  const coordinates = Array.from(getCoordinates(timelineObjects));

  // Generate the mask with a worker
  const worker = new Worker('worker.js');
  worker.postMessage({ points: coordinates, BOUNDARY });

  worker.onmessage = function (event) {
    const turfPolygon = event.data;

    L.geoJSON(turfPolygon.geometry, {
      style: {
        "color": "#ffffff",
        "weight": 0,
        "fillOpacity": 0.9
      }
    }).addTo(map);

    overlay.style.display = "none";
  };
});