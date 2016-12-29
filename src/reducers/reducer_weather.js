import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    // using concat to not change state with push()
      return state.concat([action.payload.data]);
  }
  return state;
}
