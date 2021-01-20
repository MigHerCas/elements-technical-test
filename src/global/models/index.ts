import { Dispatch } from 'react';
import { AnyAction } from '@/actions';

// Api models
type TemperatureUnit = 'C' | 'F' | 'K';

export interface DataRecord {
  city: {
    name: string;
    picture: string;
  };
  date: string;
  temp: number;
  tempType: TemperatureUnit;
}

export interface CityTemperatureRecord {
  date: string;
  temp: number;
  tempType: TemperatureUnit;
}

// App state
export type DataMap = Map<string, Array<CityTemperatureRecord>>;

export interface AppState {
  hiddenCities: Array<string>;
  dataMap: DataMap;
}

// App context
export interface AppContext {
  state: AppState;
  dispatch: Dispatch<AnyAction>;
}
