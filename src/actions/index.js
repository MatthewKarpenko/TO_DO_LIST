import axiosConfig from "../apis/axiosConfig";

export const fetchNotes = () => async dispatch => {
  await axiosConfig
    .get("/api/v1/notes")
    .then(res => dispatch({ type: "FETCH_NOTES", payload: res.data.notes }))
    .catch(err => dispatch({ type: "FETCH_ERROR", payload: 'blet' }));
  
  
};
  // return dispatch => {
  //   return axiosConfig
  //     .get("/api/v1/notes")
  //     .then(response => 
  //       dispatch({ type: "FETCH_NOTES", payload: response.data.notes })
  //     )
  //     .catch(err =>{ 
  //       dispatch({ type: "FETCH_ERROR", payload: 'Problems with server occured, please , refresh page' });
  //     })
  // };

  // const response = await axiosConfig.get('/api/v1/notes')

  //   dispatch({type: "FETCH_NOTES", payload: response.data.notes})





export const deleteNote = id => {
     return dispatch => {
       axiosConfig
        .delete(`/api/v1/notes/${id}`, {noteId: id})
        .then(response => {
          console.log(response.status)

          dispatch({type: 'DELETE_NOTE', payload: response.status})
        })
        .catch(err => {
          console.log(err);
          dispatch({type: "DELETE_ERROR", payload: true});
        });
    };
}

export const postNote = data => {
  console.log(data);
  return async dispatch => {
    await axiosConfig
      .post("/api/v1/notes", data.payload)
      .then(response => {
       
        console.log(response.data)
        dispatch({type: 'POST_NOTE', response: data});
      })
      .catch(error => {
        console.log(error);
      });
  };
};
