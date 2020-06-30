export interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface Feature {
  geometry: {
    x?: number;
    y?: number;
  };
  attributes: {
    Address?: string;
    IMDbLink?: string;
    OBJECTID?: number;
    OriginalDetails?: string;
    ShootDate?: number;
    Site?: string;
    Title?: string;
    Type: string;
  };
}

export interface FeatureHash {
  [key: string]: Array<Feature>;
}
