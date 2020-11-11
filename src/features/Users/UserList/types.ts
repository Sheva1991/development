export type UsersProps = {
    users: Array<User>
    currentPage: number,
    pageSize: number,
    totalPostsCount: number,
    portionSize: number,
    isFetching: boolean,
    onPageChanged: (pageNumber: number) => void
};

export interface User {
    id: number,
    name: string,
    email: string,
    status: string,
    gender: string,
    created_at: string,
    updated_at: string
}

export interface UsersState {
    data: Array<User>,
    total: number,
    page: number,
    totalPages: number,
    limit: number,
    fetching: boolean,
    error: boolean,
    filterOption: FilterType,
    creating: boolean,
    createdUserId: number | null
}

export interface FilterType {
    name?: string,
    gender?: string,
    status?: string
}

export type metaType = {
    pagination: paginationType
}
type paginationType = {
    total: number,
    pages: number,
    page: number,
    limit: number
}

export interface FormValues {
    name: string;
    email: string;
    status: string;
    gender: string;
}

export interface ResponseCreate {
    code: number,
    meta: null,
    data: User
}



