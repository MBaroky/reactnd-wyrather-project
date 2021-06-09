import { _getUsers } from "../_DATA";

export const GET_USERS = "GET_USERS";

function getUsers(payload) {
  return {
    type: GET_USERS,
    payload,
  };
}

export function handleGetUsers() {
  return dispatch => {
    _getUsers().then(res => dispatch(getUsers(res)));
  };
}
