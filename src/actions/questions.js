import { hideLoading, showLoading } from "react-redux-loading";
import { _saveQuestion } from "../_DATA";
import { ADD_QUESTION, GET_QUESTIONS } from "./types";

export function getQuestions(payload) {
  return {
    type: GET_QUESTIONS,
    payload,
  };
}

function addQuestion(payload) {
  return {
    type: ADD_QUESTION,
    payload,
  };
}

export function handleAddQuestion({ optionOneText, optionTwoText }) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }).then(res => {
      dispatch(addQuestion(res));
      dispatch(hideLoading());
    });
  };
}
