import { combineReducers } from 'redux';


const fetchAllNotes = (state = [],action) => {
    if (action.type === "FETCH_NOTES") {
        return action.payload
    }
    return state
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
