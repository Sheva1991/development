import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';
import styles from './PostInfo.module.scss'
import Preloader from 'components/preloader/Preloader';
import { fetchPost, deletePost } from './actions';
import { useHistory, useParams, withRouter } from 'react-router-dom';
import Title from 'components/Title';
import Post from './components/Post';
import Link from 'components/Link';
import Button from 'components/Button';


const PostInfo: React.FC = () => {
    const { data, error, fetching } = useSelector((state: RootState) => state.posts.post)
    const { page } = useSelector((state: RootState) => state.posts.postList)
    const dispatch = useDispatch()
    const [modalOpen, setModalOpen] = useState(false)
    const history = useHistory()
    const params = useParams<{ id: string }>();
    const id = +params.id

    const getPost = React.useCallback((id: number) => {
        dispatch(fetchPost(id))
    }, [dispatch])

    const deleteCurrentPost = () => {
        dispatch(deletePost(id))
        history.push({
            pathname: '/posts',
            search: `page=${page}`
        })
    }

    const toggleOpenModal = () => {
        setModalOpen(!modalOpen)
    }

    React.useEffect(() => {
        getPost(id)
    }, [getPost, id])
    return (
        <div className={styles.root}>
            { error ? <>
                <div>Что-то пошло не так</div>
                <button onClick={() => getPost(id)}>Перезагрузить</button>
            </> :
                <div className={styles.content}>
                    {fetching ? <Preloader /> :
                        data ?
                            <div className={styles.info} key={data.id}>
                                <Title title={data.title} />
                                <Post post={data} />
                            </div>
                            : null
                    }
                    <div className={styles.links}>
                        <Link title='Редактировать' link={'/posts/' + id + '/edit'} large />
                        <Button large onClick={toggleOpenModal} title='Удалить' />
                    </div>
                    {modalOpen && <div className={styles.modal}>
                        <h2>Вы действительно хотите удалить пользователя?</h2>
                        <div className={styles.modal__btns}>
                            <Button large onClick={deleteCurrentPost} title='Да' />
                            <Button large onClick={toggleOpenModal} title='Отмена' />
                        </div>
                    </div>}
                </div>
            }
        </div >

    )
}

export default withRouter(PostInfo)
