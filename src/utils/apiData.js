import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
} from './_Data.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

// export function saveLikeToggle (info) {
//   return _saveLikeToggle(info)
// }

export function saveQuestion (question) {
  return _saveQuestion(question)
}