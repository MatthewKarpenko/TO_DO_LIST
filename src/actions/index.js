import axiosConfig from "../apis/axiosConfig";

export const fetchNotes = () => async dispatch => {
  await axiosConfig
    .get("/api/v1/notes")
    .then(res => {
      dispatch({ type: "FETCH_NOTES", payload: res.data.notes });
      dispatch({ type: "FETCH_ERROR", payload: false });
    })
    .catch(err => dispatch({ type: "FETCH_ERROR", payload: true }));
};

export const deleteNote = id => async dispatch => {
  await axiosConfig
    .delete(`/api/v1/notes/${id}`, { noteId: id })
    .then(response => {
      dispatch({ type: "DELETE_NOTE", payload: response.status });
      dispatch({ type: "FETCH_ERROR", payload: false });
    })
    .catch(err => {
      dispatch({ type: "FETCH_ERROR", payload: true });
    });
};

export const postNote = data => async dispatch => {
  await axiosConfig
    .post("/api/v1/notes", data.payload)
    .then(() => {
      dispatch({ type: "POST_NOTE", response: data });
      dispatch({ type: "FETCH_ERROR", payload: false });
    })
    .catch(err => dispatch({ type: "FETCH_ERROR", payload: true }));
};

export const updateNote = (data, id) => async dispatch => {
  await axiosConfig
    .patch(`/api/v1/notes/${id}`, data)
    .then(res => {
      console.log(res);
      dispatch({ type: "FETCH_ERROR", payload: false });
    })
    .catch(err => dispatch({ type: "FETCH_ERROR", payload: true }));
};

export const askToUndo = () => {
  return { type: 'ASK_UNDO', payload: true }
}

export const closeUndo = () => {
  return { type: 'CLOSE_UNDO', payload: false }
}


export const sendUndoResponse = (boolean) => {
  return{type: 'UNDO_RESPONSE', payload: boolean}
}