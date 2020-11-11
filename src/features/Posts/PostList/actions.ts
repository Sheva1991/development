import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
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
import { Post, FilterType, ResponseCreate, FormValues } from './types';
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import instance from 'api';
import { ResponseList } from "types/types";
import { metaType } from '../../Users/UserList/types';

export const fetchRequest = createAction<typeof FETCH_REQUEST>(FETCH_REQUEST);
export const fetchError = createAction<typeof FETCH_ERROR>(FETCH_ERROR);
export const fetchResponse = createActionWithPayload<typeof FETCH_RESPONSE, ResponseList<Post>>(FETCH_RESPONSE);

export const createRequest = createAction<typeof CREATE_REQUEST>(CREATE_REQUEST);
export const createError = createAction<typeof CREATE_ERROR>(CREATE_ERROR);
export const createResponse = createActionWithPayload<typeof CREATE_RESPONSE, ResponseCreate>(CREATE_RESPONSE);

export const cleanCreatedPostId = createAction<typeof CLEAN_POST_ID_REQUEST>(CLEAN_POST_ID_REQUEST);

export const clearUserShouldExist = createAction<typeof CLEAN_USER_SHOULD_EXIST>(CLEAN_USER_SHOULD_EXIST);


export const fetchPosts = (page: number, filter: FilterType): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(fetchRequest())
    try {
        const { data } = await instance.get<{ data: Post[], meta: metaType, code: number }>(`posts`, {
            params: {
                page,
                user_id: filter.userId,
                title: filter.title
            }
        });
        dispatch(fetchResponse(data));
    } catch {
        dispatch(fetchError())
    }
}

export const createPost = (formData: FormValues): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(createRequest())
    try {
        const { data } = await instance.post<{ data: Post, meta: null, code: number }>(`posts`, {
            ...formData
        });
        dispatch(createResponse(data));
    } catch {
        dispatch(createError())
    }
}

export type PostsActions =
    | ReturnType<typeof fetchRequest>
    | ReturnType<typeof fetchError>
    | ReturnType<typeof fetchResponse>
    | ReturnType<typeof createRequest>
    | ReturnType<typeof createError>
    | ReturnType<typeof createResponse>
    | ReturnType<typeof cleanCreatedPostId>
    | ReturnType<typeof clearUserShouldExist>