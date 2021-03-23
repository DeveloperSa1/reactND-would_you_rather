
// I Took this func from _Data.js


function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

export function formatQuestion ({ optionOneText, optionTwoText, author }) {
    return {
    //   authedUser : null,
      id: generateUID(),
      timestamp: Date.now(),
      author,
      
    }
  }


