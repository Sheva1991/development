import React, { memo } from 'react'
import Preloader from 'components/preloader';
import { RootState } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import Paginator from 'components/paginator';
import { fetchPosts } from './actions';
import Title from 'components/Title';
import Filter from './components/Filter'
import { FilterType } from './types';
import styles from './PostsList.module.scss'
import Post from './components/Post';
import Link from 'components/Link';
import { useHistory } from 'react-router-dom';



const PostsList: React.FC = () => {
    const { page, limit, fetching, data, total, error, filterOption } = useSelector((state: RootState) => state.posts.postList)
    const dispatch = useDispatch()
    const history = useHistory()

    const onClickPageChange = React.useCallback((currentPage: number) => {
        dispatch(fetchPosts(currentPage, filterOption))
        history.push({
            pathname: '/posts',
            search: `page=${currentPage}`
        })
    }, [dispatch])

    const filterChange = React.useCallback((filter: FilterType) => {
        dispatch(fetchPosts(page, filter))
    }, [dispatch])

    React.useEffect(() => {
        onClickPageChange(page)
    }, [])
    return (
        <div className={styles.root}>
            <Title title='Статьи' />
            <Filter onFilterChanged={filterChange} />
            <Paginator currentPage={page} onPageChanged={onClickPageChange}
                total={total} pageSize={limit} portionSize={10} />
            { error ? <div>Что-то пошло не так</div> :
                <div className={styles.content}>
                    {fetching ? <Preloader /> :
                        data.length < 1 ? <h2>По вашему запросу ничего не найдено</h2>
                            :
                            data.map((data) =>
                                <div className={styles.item} key={data.id}>
                                    <Post post={data} />
                                </div>
                            )
                    }
                </div>
            }
            <Paginator currentPage={page} onPageChanged={onClickPageChange}
                total={total} pageSize={limit} portionSize={10} />
            <Link link='/posts/create' title='Создать' large />
        </div>
    )
}

export default memo(PostsList)