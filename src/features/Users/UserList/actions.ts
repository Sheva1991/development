import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    FETCH_ERROR,
    FETCH_REQUEST,
    FETCH_RESPONSE,
    CREATE_ERROR,
    CREATE_REQUEST,
    CREATE_RESPONSE,
    CLEAN_USER_ID_REQUEST
} from './constants'
import { User, metaType, FilterType, FormValues, ResponseCreate } from './types';
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import instance from 'api';
import { ResponseList } from "types/types";

export const fetchRequest = createAction<typeof FETCH_REQUEST>(FETCH_REQUEST);
export const fetchError = createAction<typeof FETCH_ERROR>(FETCH_ERROR);
export const fetchResponse = createActionWithPayload<typeof FETCH_RESPONSE, ResponseList<User>>(FETCH_RESPONSE);
export const createRequest = createAction<typeof CREATE_REQUEST>(CREATE_REQUEST);
export const createError = createAction<typeof CREATE_ERROR>(CREATE_ERROR);
export const createResponse = createActionWithPayload<typeof CREATE_RESPONSE, ResponseCreate>(CREATE_RESPONSE);
export const cleanCreatedUserId = createAction<typeof CLEAN_USER_ID_REQUEST>(CLEAN_USER_ID_REQUEST);


export const fetchUsers = (page: number, filter: FilterType): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(fetchRequest())
    try {
        const { data } = await instance.get<{ data: User[], meta: metaType, code: number }>(`users`, {
            params: {
                page,
                name: filter.name,
                status: filter.status,
                gender: filter.gender,
            }
        });
        dispatch(fetchResponse(data));
    } catch {
        dispatch(fetchError())
    }
}

export const createUser = (formData: FormValues): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(createRequest())
    try {
        const { data } = await instance.post<{ data: User, meta: null, code: number }>(`users`, {
            ...formData
        });
        dispatch(createResponse(data));
    } catch {
        dispatch(createError())
    }
}

export type UsersActions =
    | ReturnType<typeof fetchRequest>
    | ReturnType<typeof fetchError>
    | ReturnType<typeof fetchResponse>
    | ReturnType<typeof createRequest>
    | ReturnType<typeof createError>
    | ReturnType<typeof createResponse>
    | ReturnType<typeof cleanCreatedUserId>