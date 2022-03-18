import { GET_USER, GET_USERS, TOGGLE_FALSE, TOGGLE_TRUE } from "../constants/actionsType";

const intialState = {
    users: [],
    userId: {},
    isEdit: false
}

const reducerUser = (state = intialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.payload }

        case GET_USER:
            return { ...state, userId: action.payload[0] }

        case TOGGLE_TRUE:
            return { ...state, isEdit: true }
            
        case TOGGLE_FALSE:
            return { ...state, isEdit: false }

        default:
            return state;
    }
}

export default reducerUser