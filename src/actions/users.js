import { addQuestionAnswer, addQuestion } from "./questions";
import { saveAnswer, saveQuestion } from "../utils/api";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";

export const receivedUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export const addAnswerToUser = (authedUser, qid, answer) => {
  return {
    type: ADD_ANSWER_TO_USER,
    authedUser,
    qid,
    answer,
  };
};

export const handleSaveAnswer = (authedUser, qid, answer) => {
  return (dispatch) => {
    dispatch(addAnswerToUser(authedUser, qid, answer));
    dispatch(addQuestionAnswer(authedUser, qid, answer));
    return saveAnswer({ authedUser, qid, answer }).catch((err) => {
      console.log(err);
    });
  };
};

export const addQuestionToUser = ({ id, author }) => {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    author,
  };
};

export const handleSaveQuestion = ({
  author,
  optionOneText,
  optionTwoText,
}) => {
  return (dispatch) => {
    return saveQuestion({ author, optionOneText, optionTwoText }).then(
      (question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question));
      }
    );
  };
};
