import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from './_Data'


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




// export function savePollAPI (info) {
//     return _saveQuestion(info)
// }

export function saveQuestionAnswer ({ authedUser, qid, answer }) {
    return _saveQuestionAnswer({ authedUser, qid, answer });
}