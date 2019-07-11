

import axiosConfig from '../apis/axiosConfig';

export const fetchNotes = () => {
    return async dispatch => {
    const response = await axiosConfig.get('/api/v1/notes');

    dispatch({ type: "FETCH_NOTES", payload: response.data.notes });
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