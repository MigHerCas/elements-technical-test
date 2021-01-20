import { DataMap } from '@/models';

// Actions types
export interface Action {
  type: string;
}

export interface HideCityAction extends Action {
  payload: string; // Name of the city to hide
}

export interface InitializeDataMapAction extends Action {
  payload: DataMap; // Name of the city to hide
}

// Action constants
export const INITIALIZE_DATA_MAP = 'INITIALIZE_DATA_MAP';
export const HIDE_CITY = 'HIDE_CITY';
