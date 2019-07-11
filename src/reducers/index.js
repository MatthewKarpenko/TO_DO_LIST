import { combineReducers } from 'redux';


const fetchAllNotes = (state = [],action) => {
    if (action.type === "FETCH_NOTES") {
        return action.payload
    }
    return state
}

const createNote = (state = [], action) => {
    switch(action.type) {
        case 'POST_NOTE':
            console.log(state)
            return [...state, action.data]
        default:
            return state
    }
}

export default combineReducers({
    existedNotes: fetchAllNotes,
    createdNotes: createNote
})
