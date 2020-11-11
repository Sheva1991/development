import {
    FETCH_ERROR,
    FETCH_REQUEST,
    FETCH_RESPONSE,
    CREATE_ERROR,
    CREATE_REQUEST,
    CREATE_RESPONSE,
    CLEAN_POST_ID_REQUEST,
    CLEAN_USER_SHOULD_EXIST
} from './constants'
import { PostState } from "./types";
import { PostsActions } from "./actions";


const initialState = {
    data: [],
    total: 0,
    page: 1,
    totalPages: 1,
    limit: 20,
    fetching: false,
    error: false,
    filterOption: {
        name: '',
        gender: '',
        status: ''
    },
    creating: false,
    createdPostId: null,
    userShouldExist: false
} as PostState;

const postsReducer = (state: PostState = initialState, action: PostsActions): PostState => {
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
                createdPostId: code === 201 ? data.id : null,
                userShouldExist: code === 422 ? true : false
            }
        }
        case CLEAN_POST_ID_REQUEST: {
            return { ...state, createdPostId: null }
        }
        case CLEAN_USER_SHOULD_EXIST: {
            return { ...state, userShouldExist: false }
        }

        default:
            return state;
    }
}


export default postsReducer;

