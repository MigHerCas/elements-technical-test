import { Dispatch } from 'react';
import { AnyAction } from '@/actions';

// Api models
type TemperatureUnit = 'C' | 'F' | 'K';

export interface DataRecord {
  city: {
    name: LocationName;
    picture: string;
  };
  date: string;
  temp: number;
  tempType: TemperatureUnit;
}

export interface TemperatureRecord {
  date: string;
  temp: number;
  tempType: TemperatureUnit;
}

type LocationName = string;

// App state
export type DataMap = Map<LocationName, Array<TemperatureRecord>>;
export type ImageMap = Map<LocationName, string>;

export interface AppState {
  visibleLocations: Array<LocationName>;
  hiddenLocations: Array<LocationName>;
  dataMap: DataMap;
  imageMap: ImageMap;
}

// App context
export interface AppContext {
  state: AppState;
  dispatch: Dispatch<AnyAction>;
}
