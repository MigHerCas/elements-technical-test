import { ActionType, AnyAction, HideLocationAction, InitializeMapsAction } from '@/actions';
import type { AppState } from '@/models';

function reducer(state: AppState, action: AnyAction): AppState {
  switch (action.type) {
    case ActionType.INITIALIZE_MAPS:
      return {
        ...state,
        dataMap: (action as InitializeMapsAction).payload.dataMap,
        imageMap: (action as InitializeMapsAction).payload.imageMap,
      };
    case ActionType.HIDE_LOCATION:
      return {
        ...state,
        hiddenLocations: [...state.hiddenLocations, (action as HideLocationAction).payload],
      };
    default:
      return state;
  }
}

export default reducer;
