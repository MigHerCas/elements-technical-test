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

export type LocationName = string;

// App state
export type DataMap = Map<LocationName, Array<TemperatureRecord>>;
export type ImageMap = Map<LocationName, string>;
export type VisibleLocationsSet = Set<LocationName>;
export type HiddenLocationsSet = Set<LocationName>;
export type Theme = 'Dark' | 'Light';

export interface AppState {
  visibleLocationsSet: VisibleLocationsSet;
  hiddenLocationsSet: HiddenLocationsSet;
  dataMap: DataMap;
  imageMap: ImageMap;
  theme: Theme;
}

// App context
export interface AppContext {
  state: AppState;
  dispatch: Dispatch<AnyAction>;
}
