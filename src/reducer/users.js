import {
  ADD_QUESTION,
  GET_USERS,
  SAVE_QUESTION_ANSWER,
} from "../actions/types";

export function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.payload,
      };
    case SAVE_QUESTION_ANSWER:
      const { authedUser, qid, answer } = action.payload;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    case ADD_QUESTION:
      const { author, id } = action.payload;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: [...state[author].questions, id],
        },
      };

    default:
      return state;
  }
}
