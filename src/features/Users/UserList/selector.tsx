import { RootState } from 'app/store';
// import { createSelector } from 'reselect';


export const page = (state: RootState) => state.users.userList.page
// const totalPages = (state: RootState) => state.users.userList.totalPages
// const fetching = (state: RootState) => state.users.userList.fetching
// const data = (state: RootState) => state.users.userList.data
// const total = (state: RootState) => state.users.userList.total
// const error = (state: RootState) => state.users.userList.error


// export const totalSelector = createSelector(
//     page,
//     totalPages,
//     fetching,
//     data,
//     total,
//     error
// )
