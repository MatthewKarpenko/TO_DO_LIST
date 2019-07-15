import { combineReducers } from 'redux';


const fetchAllNotes = (state = [],action) => {
    switch (action.type) {
      case "FETCH_NOTES" :
        
        return [...action.payload]
     
      default:
        return state
    }
}

const showError = (state = null, action) => {
  switch (action.type) {
   case"FETCH_ERROR":
        return action.payload
        default: 
        return state
  }
}

const createNote = (state = [], action) => {
    switch (action.type) {
      default:
        return state;
    }
}

const deleteNote = (state = [], action) => {
  switch (action.type) {
    case "DELETE_NOTE":
      console.log(action.payload)
      return action.payload;
    case "DELETE_ERROR":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
    existedNotes: fetchAllNotes,
    createdNotes: createNote,
    deleteNote: deleteNote,
    showError
})
