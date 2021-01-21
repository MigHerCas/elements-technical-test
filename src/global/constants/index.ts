import { createContext } from 'react';
import type {
  AppState,
  DataMap,
  AppContext,
  ImageMap,
  HiddenLocationsSet,
  VisibleLocationsSet,
} from '@/models';

// Initial app state
export const INITIAL_STATE: AppState = {
  visibleLocationsSet: new Set() as VisibleLocationsSet,
  hiddenLocationsSet: new Set() as HiddenLocationsSet,
  dataMap: new Map() as DataMap,
  imageMap: new Map() as ImageMap,
  theme: 'Light',
};

// App context creation
export const APP_CONTEXT = createContext({} as AppContext);
