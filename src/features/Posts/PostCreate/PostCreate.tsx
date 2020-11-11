import { PropsType, Data } from './types';
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, cleanCreatedPostId, clearUserShouldExist } from '../PostList/actions';
import { useHistory } from 'react-router-dom';
import { RootState } from 'app/store';
import PostForm from '../PostForm';
import styles from './PostCreate.module.scss'
import Button from 'components/Button';



const PostCreate: React.FC<PropsType> = () => {
    const { createdPostId, userShouldExist } = useSelector((state: RootState) => state.posts.postList)
    const dispatch = useDispatch()
    const history = useHistory()

    const create = (data: Data) => {
        dispatch(createPost(data))
    }

    const closeModal = () => {
        dispatch(clearUserShouldExist())
    }

    useEffect(() => {
        if (createdPostId !== null) {
            history.push(`/posts/${createdPostId}`)
            dispatch(cleanCreatedPostId())
        }
    }, [createdPostId])

    return (
        <>
            <PostForm action={create} />
            {userShouldExist && <div className={styles.modal} onClick={closeModal}>
                <h2>Введите существующего пользователя <b>UserId</b></h2>
                <Button title='Повторить попытку' />
            </div>}
        </>

    )
}

export default memo(PostCreate)
