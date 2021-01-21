import { DataMap, ImageMap } from '@/models';

// Actions enum. This ensures not to dispatch any misspelled action
export enum ActionType {
  INITIALIZE_MAPS = 'INITIALIZE_MAPS',
  HIDE_LOCATION = 'HIDE_LOCATION',
}

// Actions types
export interface Action {
  type: ActionType;
}

export interface HideLocationAction extends Action {
  payload: string; // Name of the city to hide
}

export interface InitializeMapsAction extends Action {
  payload: {
    imageMap: ImageMap;
    dataMap: DataMap;
  };
}

// Set of all different actions used in this app.
// *** Add every action type here ***
export type AnyAction = InitializeMapsAction | HideLocationAction;
