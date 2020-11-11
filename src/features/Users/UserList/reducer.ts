import {
    FETCH_ERROR,
    FETCH_REQUEST,
    FETCH_RESPONSE,
    CREATE_ERROR,
    CREATE_REQUEST,
    CREATE_RESPONSE,
    CLEAN_USER_ID_REQUEST
} from './constants'
import { UsersState } from "./types";
import { UsersActions } from "./actions";


const initialState = {
    data: [],
    total: 0,
    page: 1,
    totalPages: 1,
    limit: 20,
    fetching: false,
    creating: false,
    error: false,
    filterOption: {
        name: '',
        gender: '',
        status: ''
    },
    createdUserId: null
} as UsersState;

const usersReducer = (state: UsersState = initialState, action: UsersActions): UsersState => {
    switch (action.type) {
        case FETCH_REQUEST: {
            return { ...state, fetching: true, error: false }
        }

        case FETCH_ERROR: {
            return { ...state, fetching: false, error: true }
        }

        case FETCH_RESPONSE: {
            const {
                data,
                meta: {
                    pagination: {
                        page,
                        pages,
                        total,
                        limit
                    }
                },
            } = action.payload
            return {
                ...state,
                fetching: false,
                error: false,
                data,
                total,
                page,
                limit,
                totalPages: pages,
            }
        }
        case CREATE_REQUEST: {
            return { ...state, creating: true, error: false }
        }

        case CREATE_ERROR: {
            return { ...state, creating: false, error: true }
        }

        case CREATE_RESPONSE: {
            const { code, data } = action.payload
            return {
                ...state,
                creating: false,
                error: false,
                createdUserId: code === 201 ? data.id : null
            }
        }
        case CLEAN_USER_ID_REQUEST: {
            return { ...state, createdUserId: null }
        }

        default:
            return state;
    }
}


export default usersReducer;

