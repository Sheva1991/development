

export type PropsType = {
    onFilterChanged: (filter: FilterOption) => void
}

export interface FilterOption {
    name?: string,
    gender?: string,
    status?: string
}

export type filterType = {
    name?: string,
    gender?: 'male' | 'female' | '',
    status?: 'active' | 'inactive' | ''
}
