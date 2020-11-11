import { PropsType, Data } from './types';
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostForm from '../PostForm';
import { RootState } from 'app/store';
import { useHistory, useParams } from 'react-router-dom';
import { editPost, fetchPost } from '../PostInfo/actions';



const PostEdit: React.FC<PropsType> = () => {
    const { data } = useSelector((state: RootState) => state.posts.post)
    const dispatch = useDispatch()
    const history = useHistory()
    const params = useParams<{ id: string }>();
    const id = +params.id

    const edit = useCallback(async (data: Data) => dispatch(
        editPost(
            data,
            () => {
                history.push({
                    pathname: `/posts/${id}`,
                })
            }
        )
    ), [dispatch, history])

    useEffect(() => {
        dispatch(fetchPost(id))
    }, [dispatch, id])


    return (
        <>
            {data ?
                <PostForm action={edit} data={data} /> : null}


        </>
    )
}

export default PostEdit
