import { _getQuestions } from "../_DATA";

export const GET_QUESTIONS = "GET_QUESTIONS";

function getQuestions(payload) {
  return {
    type: GET_QUESTIONS,
    payload,
  };
}

export function handleGetQuestions() {
  return dispatch => {
    _getQuestions().then(res => dispatch(getQuestions(res)));
  };
}
