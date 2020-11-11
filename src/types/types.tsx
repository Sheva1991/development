export type usersType = {
    id: number,
    name: string,
    email: string,
    status: string,
    gender: string,
    created_at: string,
    updated_at: string
}

export type postType = {
    id: number,
    user_id: number,
    title: string,
    body: string,
    created_at: string,
    updated_at: string
}

export interface Pagination {
    total: number,
    pages: number,
    page: number,
    limit: number
}

export interface ResponseList<T> {
    data: T[],
    meta: {
        pagination: Pagination,
    },
    code: number
}