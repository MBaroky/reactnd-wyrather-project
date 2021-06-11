import { _saveQuestionAnswer } from "../_DATA";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

function saveQuestionAnswer(payload) {
  return {
    type: SAVE_QUESTION_ANSWER,
    payload,
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
