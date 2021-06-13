import { GET_USERS } from "./types";

export function getUsers(payload) {
  return {
    type: GET_USERS,
    payload,
  };
}

// export function handleGetUsers() {
//   return dispatch => {
//     _getUsers().then(res => dispatch(getUsers(res)));
//   };
// }
