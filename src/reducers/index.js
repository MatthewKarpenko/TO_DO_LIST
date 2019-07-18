import { combineReducers } from "redux";

const fetchAllNotes = (state = [], action) => {
  switch (action.type) {
    case "FETCH_NOTES":
      return [...action.payload.reverse()];

    default:
      return state;
  }
};

const showError = (state = null, action) => {
  switch (action.type) {
    case "FETCH_ERROR":
      return action.payload;
    default:
      return state;
  }
};

const createNote = (state = [], action) => {
  return state;
};

const deleteNote = (state = [], action) => {
  switch (action.type) {
    case "DELETE_NOTE":
      return action.payload;
    default:
      return state;
  }
};

const showDeleteError = (state = null, action) => {
  switch (action.type) {
    case "DELETE_ERROR":
      return action.payload;
    default:
      return state;
  }
};

const askToUndo = (state = false, action) => {
  switch (action.type) {
    case "ASK_UNDO":
      return action.payload;
    case "CLOSE_UNDO":
      return action.payload;
    default:
      return state;
  }
}

const sendUndoResponse = (state = false, action) => {
  switch (action.type) {
    case "UNDO_RESPONSE":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  existedNotes: fetchAllNotes,
  createdNotes: createNote,
  deleteNote: deleteNote,
  showError,
  showDeleteError,
  askToUndo,
  sendUndoResponse
});
