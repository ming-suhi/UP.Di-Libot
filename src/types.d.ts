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