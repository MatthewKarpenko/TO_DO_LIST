

import axiosConfig from '../apis/axiosConfig';

export const fetchNotes = () => {
    return  dispatch => {
   return axiosConfig.get('/api/v1/notes')
   .then(response =>  dispatch({ type: "FETCH_NOTES", payload: response.data.notes }))
   .catch(err => console.log(err))
    }
};

export const postNote = (data) => {
    console.log(data)
     return async dispatch => {  
        await axiosConfig.post("/api/v1/notes",data.payload)
        .then(response => {
            dispatch(response.data);
        })
        .catch(error => {
            console.log(error)
        })
       
     };
}