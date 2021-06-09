export const SET_AUTHED = "SET_AUTHED";

export function setAuthed(userId) {
  return {
    type: SET_AUTHED,
    payload: userId,
  };
}
