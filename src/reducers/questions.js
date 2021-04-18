import { RECEIVE_QUESTIONS, ADD_QUESTION_ANSWER,ADD_QUESTION } from '../actions/questions'

export default function questions(state = {} , action) {

    switch(action.type){
     case RECEIVE_QUESTIONS :
         return {
             ...state,
             ...action.questions
         }
         case ADD_QUESTION_ANSWER :
            return {
                ...state,
                [action.qid] : {
                    ...state[action.qid],
                    [action.answer] : {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
            case ADD_QUESTION:
                const { question } = action;
          
                return {
                  ...state,
                  [question.id]: question
                };
         default : 
         return state;

}
}