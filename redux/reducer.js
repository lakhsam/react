
function getId(state) {
  return state.texts.reduce((maxId, text) => {
    return Math.max(text.id, maxId)
  }, -1) + 1
}

export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TEXT':
      return Object.assign({}, state, {
        texts: [{
          text: action.text,
          completed: false,
          id: getId(state)
        }, ...state.texts]
      })
    default: 
      return state;
  }
}