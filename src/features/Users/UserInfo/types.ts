export interface User {
    id: number,
    name: string,
    email: string,
    status: string,
    gender: string,
    created_at: string,
    updated_at: string
}

export interface UserState {
    data: User | null,
    fetching: boolean,
    error: boolean,
    deleting: boolean,
    editing: boolean
}

export interface FormValues {
    id?: number;
    name: string;
    email: string;
    status: string;
    gender: string;
}

export interface ResponseEdit {
    code: number,
    meta: null,
    data: User
}






