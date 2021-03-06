import { SET_AUTHED } from "../actions/types";

export function authedUser(state = null, action) {
  if (action.type === SET_AUTHED) {
    return action.payload;
  }
  return state;
}
