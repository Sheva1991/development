import { User } from './../UserList/types';
export interface FormValues {
    name: string;
    email: string;
    status: string;
    gender: string;
}

export interface PropsType {
    action: (data: FormValues, id?: number) => void,
    data?: User
}
