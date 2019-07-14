import axiosConfig from "../apis/axiosConfig";

export const fetchNotes = () => {
  return dispatch => {
    return axiosConfig
      .get("/api/v1/notes")
      .then(response => 
        dispatch({ type: "FETCH_NOTES", payload: response.data.notes })
      )
      .catch(err =>{ 
        dispatch({ type: "FETCH_ERROR", payload: 'Problems with server occured, refresh page' });
      })
  };

  // const response = await axiosConfig.get('/api/v1/notes')

  //   dispatch({type: "FETCH_NOTES", payload: response.data.notes})
};


export const deleteNote = data => {
    return async dispatch => {
      await axiosConfig
        .delete(`/api/v1/notes/:${data.id}`, data.id)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error);
        });
    };
}

export const postNote = data => {
  console.log(data);
  return async dispatch => {
    await axiosConfig
      .post("/api/v1/notes", data.payload)
      .then(response => {
        dispatch(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
};
