import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    FETCH_ERROR,
    FETCH_REQUEST,
    FETCH_RESPONSE,
    DELETE_ERROR,
    DELETE_REQUEST,
    DELETE_RESPONSE,
    EDIT_ERROR,
    EDIT_REQUEST,
    EDIT_RESPONSE
} from './constants'
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import instance from 'api';
import { User, FormValues, ResponseEdit } from './types';

export const fetchRequest = createAction<typeof FETCH_REQUEST>(FETCH_REQUEST);
export const fetchError = createAction<typeof FETCH_ERROR>(FETCH_ERROR);
export const fetchResponse = createActionWithPayload<typeof FETCH_RESPONSE, User | null>(FETCH_RESPONSE);
export const deleteRequest = createAction<typeof DELETE_REQUEST>(DELETE_REQUEST);
export const deleteError = createAction<typeof DELETE_ERROR>(DELETE_ERROR);
export const deleteResponse = createActionWithPayload<typeof DELETE_RESPONSE, User | null>(DELETE_RESPONSE);
export const editRequest = createAction<typeof EDIT_REQUEST>(EDIT_REQUEST);
export const editError = createAction<typeof EDIT_ERROR>(EDIT_ERROR);
export const editResponse = createActionWithPayload<typeof EDIT_RESPONSE, ResponseEdit>(EDIT_RESPONSE);


export const fetchUser = (id: number): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(fetchRequest())
    try {
        const { data: { data } } = await instance.get<{ data: User }>(`users/${id}`);
        dispatch(fetchResponse(data));
    } catch {
        dispatch(fetchError())
    }
}

export const deleteUser = (id: number): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(deleteRequest())
    try {
        const { data: { data } } = await instance.delete<{ data: null, meta: null, code: number }>(`users/${id}`);

        dispatch(deleteResponse(data));
    } catch {
        dispatch(deleteError())
    }
}


export const editUser = (formData: FormValues, onSuccess: Function): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(editRequest())
    try {
        const { data } = await instance.put<{ data: User, meta: null, code: number }>(`users/${formData.id}`, {
            ...formData
        });
        dispatch(editResponse(data));

        onSuccess();
    } catch {
        dispatch(editError())
    }
}

export type UserActions =
    | ReturnType<typeof fetchRequest>
    | ReturnType<typeof fetchError>
    | ReturnType<typeof fetchResponse>
    | ReturnType<typeof deleteRequest>
    | ReturnType<typeof deleteError>
    | ReturnType<typeof deleteResponse>
    | ReturnType<typeof editRequest>
    | ReturnType<typeof editError>
    | ReturnType<typeof editResponse>