import {
    FETCH_ERROR,
    FETCH_REQUEST,
    FETCH_RESPONSE,
    DELETE_ERROR,
    DELETE_REQUEST,
    DELETE_RESPONSE,
    EDIT_ERROR,
    EDIT_REQUEST,
    EDIT_RESPONSE,
} from './constants'
import { UserState } from "./types";
import { UserActions } from "./actions";


const initialState = {
    data: {},
    fetching: false,
    deleting: false,
    editing: false,
    error: false,
} as UserState;

const userReducer = (state: UserState = initialState, action: UserActions): UserState => {
    switch (action.type) {
        case FETCH_REQUEST: {
            return { ...state, fetching: true, error: false }
        }

        case FETCH_ERROR: {
            return { ...state, fetching: false, error: true }
        }

        case FETCH_RESPONSE: {
            const data = action.payload
            return {
                ...state,
                fetching: false,
                error: false,
                data
            }
        }
        case DELETE_REQUEST: {
            return { ...state, deleting: true }
        }

        case DELETE_ERROR: {
            return { ...state, deleting: false }
        }

        case DELETE_RESPONSE: {
            const data = action.payload
            return {
                ...state,
                deleting: false,
                data
            }
        }
        case EDIT_REQUEST: {
            return { ...state, editing: true, error: false }
        }

        case EDIT_ERROR: {
            return { ...state, editing: false, error: true }
        }

        case EDIT_RESPONSE: {
            const { data } = action.payload
            return {
                ...state,
                editing: false,
                error: false,
                data
            }
        }

        default:
            return state;
    }
}


export default userReducer;

