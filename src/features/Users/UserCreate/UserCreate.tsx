import { PropsType, Data } from './types';
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser, cleanCreatedUserId } from '../UserList/actions';
import UserForm from '../UserForm';
import { useHistory } from 'react-router-dom';
import { RootState } from 'app/store';



const UserCreate: React.FC<PropsType> = () => {
    const { createdUserId } = useSelector((state: RootState) => state.users.userList)
    const dispatch = useDispatch()
    const history = useHistory()

    const create = (data: Data) => {
        dispatch(createUser(data))
    }

    useEffect(() => {
        if (createdUserId !== null) {
            history.push(`/users/${createdUserId}`)
            dispatch(cleanCreatedUserId())
        }
    }, [createdUserId])

    return (
        <UserForm action={create} />
    )
}

export default memo(UserCreate)
