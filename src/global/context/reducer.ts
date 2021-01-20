import {
  HIDE_CITY,
  INITIALIZE_DATA_MAP,
  Action,
  InitializeDataMapAction,
  HideCityAction,
} from '@/actions';
import { AppState } from '@/models';

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case INITIALIZE_DATA_MAP:
      return { ...state, dataMap: (action as InitializeDataMapAction).payload };
    case HIDE_CITY:
      return {
        ...state,
        hiddenCities: [...state.hiddenCities, (action as HideCityAction).payload],
      };
    default:
      return state;
  }
}

export default reducer;
