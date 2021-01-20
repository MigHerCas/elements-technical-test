import { AnyAction, InitializeDataMapAction, HideCityAction, ActionType } from '@/actions';
import { AppState } from '@/models';

function reducer(state: AppState, action: AnyAction): AppState {
  switch (action.type) {
    case ActionType.INITIALIZE_DATA_MAP:
      return { ...state, dataMap: (action as InitializeDataMapAction).payload };
    case ActionType.HIDE_CITY:
      return {
        ...state,
        hiddenCities: [...state.hiddenCities, (action as HideCityAction).payload],
      };
    default:
      return state;
  }
}

export default reducer;
