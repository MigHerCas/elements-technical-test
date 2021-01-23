import type { DataMap, ImageMap, LocationName } from '@/models';

// Actions enum. This ensures not to dispatch any misspelled action
export enum ActionType {
  INITIALIZE_MAPS = 'INITIALIZE_MAPS',
  INITIALIZE_SETS = 'INITIALIZE_SETS',
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

// Set of all different actions used in this app.
// *** Add every action type here ***
export type AnyAction = Action | InitializeMapsAction | ToggleLocationAction;
