import { Post } from './../PostList/types';
export interface FormValues {
    user_id: number | null | string;
    title: string;
    body: string;
}

export interface PropsType {
    action: (data: FormValues, id?: number) => void,
    data?: Post
}
