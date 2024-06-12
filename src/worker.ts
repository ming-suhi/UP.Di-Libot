// @ts-nocheck
// Issue with using Turf typings
importScripts('https://cdn.jsdelivr.net/npm/@turf/turf@6/turf.min.js');

self.onmessage = function(event) {
  const { points, BOUNDARY } = event.data;
  const T = turf;

  let turfPolygon = T.polygon([[
    [-180, -90], [180, -90], [180, 90], [-180, 90], [-180, -90]
  ]]);

  points.forEach(point => {
    const turfPoint = T.point([point.longitude, point.latitude]);
    if (T.booleanPointInPolygon(turfPoint, BOUNDARY)) {
      const buffer = T.buffer(turfPoint, 100, { units: 'meters' });
      turfPolygon = T.difference(turfPolygon, buffer);
    }
  });

  self.postMessage(turfPolygon);
};