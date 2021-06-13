import { SET_AUTHED } from "./types";

export function setAuthed(userId) {
  return {
    type: SET_AUTHED,
    payload: userId,
  };
}
