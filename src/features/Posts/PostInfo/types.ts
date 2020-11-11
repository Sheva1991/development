export interface Post {
    id: number,
    user_id: number,
    title: string,
    body: string,
    created_at: string,
    updated_at: string
}

export interface PostState {
    data: Post | null,
    fetching: boolean,
    error: boolean,
    deleting: boolean,
    editing: boolean
}

export interface FormValues {
    id?: number;
    user_id: number | null | string;
    title: string;
    body: string;
}

export interface ResponseEdit {
    code: number,
    meta: null,
    data: Post
}










