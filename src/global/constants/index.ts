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

export const SLIDER_BREAKPOINTS = {
  450: {
    slidesPerView: 1.4,
  },
  600: {
    slidesPerView: 1.7,
  },
  700: {
    slidesPerView: 2.2,
  },
  900: {
    slidesPerView: 2.4,
  },
  1024: {
    slidesPerView: 3,
  },
  1200: {
    slidesPerView: 3.2,
  },
  1440: {
    slidesPerView: 3.5,
  },
  1600: { slidesPerView: 3.8 },
};
