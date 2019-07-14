import { combineReducers } from 'redux';


const fetchAllNotes = (state = [],action) => {
    switch (action.type) {
      case "FETCH_NOTES" :
        return action.payload
      case"FETCH_ERROR":
        return action.payload
      default:
        return state
    }
}

const createNote = (state = [], action) => {
    switch (action.type) {
      case "POST_NOTE":
        return [...state, action.data];
      case "DELETE_POST":
        return state.filter(post => post.id !== action.id);
      default:
        return state;
    }
}

export default combineReducers({
    existedNotes: fetchAllNotes,
    createdNotes: createNote
})
