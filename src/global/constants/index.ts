import { createContext } from 'react';
import type { AppState, DataMap, AppContext, ImageMap, LocationSet } from '@/models';

// Initial app state
export const INITIAL_STATE: AppState = {
  visibleLocationsSet: new Set() as LocationSet,
  hiddenLocationsSet: new Set() as LocationSet,
  dataMap: new Map() as DataMap,
  imageMap: new Map() as ImageMap,
  theme: 'Light',
  initialized: false,
};

// App context creation
export const APP_CONTEXT = createContext({} as AppContext);
