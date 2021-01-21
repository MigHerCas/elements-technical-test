import type { DataMap, ImageMap, LocationName, Theme } from '@/models';

// Actions enum. This ensures not to dispatch any misspelled action
export enum ActionType {
  INITIALIZE_MAPS = 'INITIALIZE_MAPS',
  TOGGLE_LOCATION = 'TOGGLE_LOCATION',
  TOGGLE_THEME = 'TOGGLE_THEME',
}

// Actions types
export interface Action {
  type: ActionType;
}

export interface ToggleLocationAction extends Action {
  payload: LocationName; // Name of the city to hide
}

export interface InitializeMapsAction extends Action {
  payload: {
    imageMap: ImageMap;
    dataMap: DataMap;
  };
}

export interface ToggleThemeAction extends Action {
  payload: Theme;
}

// Set of all different actions used in this app.
// *** Add every action type here ***
export type AnyAction = InitializeMapsAction | ToggleLocationAction | ToggleThemeAction;
