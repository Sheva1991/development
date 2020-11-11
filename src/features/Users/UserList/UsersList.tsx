import React, { memo } from 'react'
import Preloader from 'components/preloader';
import { RootState } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import Paginator from 'components/paginator';
import { fetchUsers } from './actions';
import Title from 'components/Title';
import Filter from 'features/Users/UserList/components/Filter';
import { FilterType } from './types';
import styles from './UsersList.module.scss'
import { useHistory } from 'react-router-dom';
import User from './components/User';
import Link from 'components/Link';



const UsersList: React.FC = memo(() => {
    const { page, limit, fetching, data, total, error, filterOption } = useSelector((state: RootState) => state.users.userList)
    const { deleting } = useSelector((state: RootState) => state.users.user)
    const dispatch = useDispatch()
    const history = useHistory()

    const onClickPageChange = React.useCallback((currentPage: number) => {
        dispatch(fetchUsers(currentPage, filterOption))
        history.push({
            pathname: '/users',
            search: `page=${currentPage}`
        })

    }, [dispatch])

    const filterChange = React.useCallback((filter: FilterType) => {
        dispatch(fetchUsers(page, filter))
    }, [dispatch])


    React.useEffect(() => {
        onClickPageChange(page)
    }, [])

    return (
        <div className={styles.root}>
            <Title title='Пользователи' />
            <Filter onFilterChanged={filterChange} />
            <Paginator currentPage={page} onPageChanged={onClickPageChange}
                total={total} pageSize={limit} portionSize={10} />
            { error ? <div>Что-то пошло не так</div> :
                <div className={styles.content}>
                    {fetching || deleting ? <Preloader /> :
                        data.length < 1 ? <h2>По вашему запросу ничего не найдено</h2>
                            :
                            data.map((user) =>
                                <div className={styles.item} key={user.id}>
                                    <User user={user} />
                                </div>
                            )
                    }
                </div>
            }
            <Paginator currentPage={page} onPageChanged={onClickPageChange}
                total={total} pageSize={limit} portionSize={10} />
            <Link link='/users/create' title='Создать' large />
        </div>
    )
}
)

export default UsersList