// @ts-nocheck
importScripts('https://cdn.jsdelivr.net/npm/@turf/turf@6/turf.min.js');

self.onmessage = function(event) {
  const { points, boundaryPolygon } = event.data;
  const T = turf;

  let turfPolygon = T.polygon([[
    [-180, -90], [180, -90], [180, 90], [-180, 90], [-180, -90]
  ]]);

  points.forEach(point => {
    const turfPoint = T.point([point.longitude, point.latitude]);
    if (T.booleanPointInPolygon(turfPoint, boundaryPolygon)) {
      const buffer = T.buffer(turfPoint, 100, { units: 'meters' });
      turfPolygon = T.difference(turfPolygon, buffer);
    }
  });

  self.postMessage(turfPolygon);
};