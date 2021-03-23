
// I Took this func from _Data.js


function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

export function formatQuestion ({ authedUser , id, question }) {
    const {optionOne,optionTwo,author} = question;
    return {
      authedUser : null,
      id: generateUID(),
      timestamp: Date.now(),
      author,
      optionOne: {
        votes: [],
        text: optionOne.optionOneText,
      },
      optionTwo: {
        votes: [],
        text: optionTwo.optionTwoText,
      }
    }
  }


