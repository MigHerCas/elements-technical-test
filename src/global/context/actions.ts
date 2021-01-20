import { DataMap } from '@/models';

// Actions enum. This ensures not to dispatch any misspelled action
export enum ActionType {
  INITIALIZE_DATA_MAP = 'INITIALIZE_DATA_MAP',
  HIDE_CITY = 'HIDE_CITY',
}

// Actions types
export interface Action {
  type: ActionType;
}

export interface HideCityAction extends Action {
  payload: string; // Name of the city to hide
}

export interface InitializeDataMapAction extends Action {
  payload: DataMap; // Datamap ready to tinitialize
}

// Set of all different actions used in this app.
export type AnyAction = InitializeDataMapAction | HideCityAction;
