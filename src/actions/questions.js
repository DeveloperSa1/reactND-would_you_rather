import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_Data'
import {saveQuestionAnswer} from '../utils/api'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'


export function receiveQuestions (questions) {
    return {
      type : RECEIVE_QUESTIONS,
      questions,
    }
}

export function addQuestionAnswer(authedUser, qid, answer) {
  return {
      type: ADD_QUESTION_ANSWER,
      authedUser,
      qid,
      answer
  }
}

export function handleSubmitAnswer(qid, answer) {
  return (dispatch, getState) => {
      const { authedUser } = getState();



      return saveQuestionAnswer({
          authedUser,
          qid,
          answer
      })
      .then(() => dispatch(handleSubmitAnswer(authedUser, qid, answer)))
  }
}
