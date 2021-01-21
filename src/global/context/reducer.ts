import {
  ActionType,
  AnyAction,
  ToggleLocationAction,
  InitializeMapsAction,
  ToggleThemeAction,
} from '@/actions';
import type { AppState, VisibleLocationsSet, HiddenLocationsSet } from '@/models';
import { switchLocation } from '@/utils';

function reducer(state: AppState, action: AnyAction): AppState {
  const clonedLocationSets = {
    hiddenLocationsSet: new Set(state.hiddenLocationsSet) as HiddenLocationsSet,
    visibleLocationsSet: new Set(state.visibleLocationsSet) as VisibleLocationsSet,
  };

  switch (action.type) {
    case ActionType.INITIALIZE_MAPS:
      return {
        ...state,
        dataMap: (action as InitializeMapsAction).payload.dataMap,
        imageMap: (action as InitializeMapsAction).payload.imageMap,
      };

    case ActionType.TOGGLE_LOCATION:
      // eslint-disable-next-line no-case-declarations
      const { hiddenLocationsSet, visibleLocationsSet } = switchLocation(
        (action as ToggleLocationAction).payload,
        clonedLocationSets.hiddenLocationsSet,
        clonedLocationSets.visibleLocationsSet
      );

      return {
        ...state,
        hiddenLocationsSet,
        visibleLocationsSet,
      };
    case ActionType.TOGGLE_THEME:
      return {
        ...state,
        theme: (action as ToggleThemeAction).payload === 'Dark' ? 'Light' : 'Dark',
      };
    default:
      return state;
  }
}

export default reducer;
