import {addQuestionAnswer} from './questions'
import {saveAnswer} from '../utils/api'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';
export function receivedUsers (users) {
    return {
        type : RECEIVE_USERS,
        users
    }
}

export function addAnswerToUser(authedUser, qid, answer) {
  return {
    type: ADD_ANSWER_TO_USER,
    authedUser,
    qid,
    answer
  };
}

export function handleSaveAnswer(authedUser, qid, answer) {
  return dispatch => {
    //Tested
    dispatch(addAnswerToUser(authedUser,qid, answer));
    dispatch(addQuestionAnswer(authedUser, qid ,answer));

    // Tested Down
    return saveAnswer({authedUser,qid, answer}).catch(e => {
      console.log('Error in happend while saving the answer', e);
    });
  };
}