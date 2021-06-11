import { GET_QUESTIONS } from "../actions/questions";
import { SAVE_QUESTION_ANSWER } from "../actions/shared";

export function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.payload,
      };
    case SAVE_QUESTION_ANSWER:
      const { authedUser, qid, answer } = action.payload;
      return {
        ...state,
        [qid]: {
          // our targetted question
          ...state[qid], // spread question
          [answer]: {
            // our targetted answer
            ...state[qid][answer], // spread the answer
            votes: state[qid][answer].votes.concat([authedUser]), // add authedId to the votes
          },
        },
      };
    default:
      return state;
  }
}
