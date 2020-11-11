export type PropsType = {
    total: number,
    pageSize: number,
    currentPage: number,
    portionSize: number,
    onPageChanged: (pageNumber: number) => void,
}