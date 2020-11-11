export type PostsProps = {
    posts: Array<Post>
    currentPage: number,
    pageSize: number,
    totalPostsCount: number,
    portionSize: number,
    isFetching: boolean,
    onPageChanged: (pageNumber: number) => void
};

export interface Post {
    id: number,
    user_id: number,
    title: string,
    body: string,
    created_at: string,
    updated_at: string
}

export interface PostState {
    data: Array<Post>,
    total: number,
    page: number,
    totalPages: number,
    limit: number,
    fetching: boolean,
    error: boolean,
    filterOption: FilterType,
    creating: boolean,
    createdPostId: number | null,
    userShouldExist: boolean
}


export interface PostResponse {
    data: Post[],
    meta: metaType
}

type metaType = {
    pagination: paginationType
}
type paginationType = {
    total: number,
    pages: number,
    page: number,
    limit: number
}

export type FilterType = {
    userId?: number | null | string,
    title?: string
}

export interface ResponseCreate {
    code: number,
    meta: null,
    data: Post
}

export interface FormValues {
    user_id: number | null | string;
    title: string;
    body: string;
}

