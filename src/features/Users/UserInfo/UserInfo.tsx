import React, { useState, useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';
import styles from './UserInfo.module.scss'
import Preloader from 'components/preloader';
import { fetchUser, deleteUser } from './actions';
import { useHistory, useParams } from 'react-router-dom';
import User from './components/User';
import Title from 'components/Title';
import Link from 'components/Link';
import Button from 'components/Button';


const UserInfo: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const { data, error, fetching } = useSelector((state: RootState) => state.users.user)
    const { page } = useSelector((state: RootState) => state.users.userList)
    const dispatch = useDispatch()
    const history = useHistory()
    const params = useParams<{ id: string }>();
    const id = +params.id

    const getUser = useCallback(() => {
        dispatch(fetchUser(id))
    }, [dispatch, id])

    const deleteCurrentUser = () => {
        dispatch(deleteUser(id))
        history.push({
            pathname: '/users',
            search: `page=${page}`
        })
    }

    const toggleOpenModal = () => {
        setModalOpen(!modalOpen)
    }

    React.useEffect(() => {
        getUser()
    }, [])

    return (
        <div className={styles.root}>
            { error ? <>
                <div>Что-то пошло не так</div>
                <button onClick={getUser}>Перезагрузить</button>
            </> :
                <>
                    {fetching ? <Preloader /> :
                        data ?
                            <div className={styles.info} key={data.id}>
                                <Title title={`Пользователь ${data.name}`} />
                                <User user={data} />

                            </div>
                            : null
                    }
                    <div className={styles.links}>
                        <Link title='Редактировать' link={'/users/' + id + '/edit'} large />
                        <Button large onClick={toggleOpenModal} title='Удалить' />
                    </div>
                    {modalOpen && <div className={styles.modal}>
                        <h2>Вы действительно хотите удалить пользователя?</h2>
                        <div className={styles.modal__btns}>
                            <Button large onClick={deleteCurrentUser} title='Да' />
                            <Button large onClick={toggleOpenModal} title='Отмена' />
                        </div>
                    </div>}
                </>
            }
        </div >

    )
}

export default memo(UserInfo)
