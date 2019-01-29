import { FETCH_POST } from "../actions";

export default function userData(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      return action.payload;
    default:
      return state;
  }
}
