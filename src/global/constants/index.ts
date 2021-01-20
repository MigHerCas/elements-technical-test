import { createContext } from 'react';
import { AppState, DataMap, AppContext } from '@/models';

// Initial app state
export const INITIAL_STATE: AppState = {
  hiddenCities: [],
  dataMap: new Map() as DataMap,
};

// App context
export const APP_CONTEXT = createContext({} as AppContext);
