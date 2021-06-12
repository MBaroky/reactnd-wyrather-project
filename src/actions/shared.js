import { _saveQuestionAnswer } from "../_DATA";
import { _getQuestions } from "../_DATA";
import { _getUsers } from "../_DATA";
import { getQuestions } from "./questions";
import { getUsers } from "./users";
import { showLoading, hideLoading } from "react-redux-loading";

export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

function saveQuestionAnswer(payload) {
  return {
    type: SAVE_QUESTION_ANSWER,
    payload,
  };
}
export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return Promise.all([_getQuestions(), _getUsers()]).then(
      ([questions, users]) => {
        dispatch(getQuestions(questions));
        dispatch(getUsers(users));
        dispatch(hideLoading());
      }
    );

    // _getQuestions().then(res => dispatch(getQuestions(res)));
    // _getUsers().then(res => dispatch(getUsers(res)));
  };
}
export function handleSaveQuestionAnswer({
  authedUser,
  qid,
  answer,
}) {
  return dispacth => {
    _saveQuestionAnswer({ authedUser, qid, answer }).then(
      dispacth(saveQuestionAnswer({ authedUser, qid, answer }))
    );
  };
}
