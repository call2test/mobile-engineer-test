export interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface Feature {
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

export interface Result {
  data: {};
  isLoading: boolean;
  isError: boolean;
}

export interface FeatureHash {
  [key: string]: Array<Feature>;
}
