import { createContext } from 'react';
import { AppState, DataMap, AppContext, ImageMap } from '@/models';

// Initial app state
export const INITIAL_STATE: AppState = {
  visibleLocations: [],
  hiddenLocations: [],
  dataMap: new Map() as DataMap,
  imageMap: new Map() as ImageMap,
};

// App context
export const APP_CONTEXT = createContext({} as AppContext);
