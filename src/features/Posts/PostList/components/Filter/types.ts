

export type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}


export type FilterType = {
    userId?: number | null | string,
    title?: string,
}
