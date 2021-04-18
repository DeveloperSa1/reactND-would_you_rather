import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from './_Data'

export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
  }

export const getUsers = async () => {

    const users = await _getUsers()
    return {
        users
    }

}

export const getQuestions = async () => {

    const questions = await _getQuestions()
    return {
        questions,
    }
}


export const saveQuestion = (question) => {
    return _saveQuestion(question)
  }
  

export function saveAnswer ({authedUser, qid, answer} ) {
    return _saveQuestionAnswer({ authedUser, qid, answer });
}