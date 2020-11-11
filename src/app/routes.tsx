
import PostCreate from 'features/Posts/PostCreate'
import PostEdit from 'features/Posts/PostEdit'
import PostInfo from 'features/Posts/PostInfo'
import PostsList from 'features/Posts/PostList'
import UserCreate from 'features/Users/UserCreate'
import UserEdit from 'features/Users/UserEdit/UserEdit'
import UserInfo from 'features/Users/UserInfo'
import UsersList from 'features/Users/UserList'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' />
            <Route exact path='/users' component={UsersList} />
            <Route exact path='/users/create' component={UserCreate} />
            <Route exact path='/users/:id?' component={UserInfo} />
            <Route path='/users/:id?/edit' component={UserEdit} />
            <Route exact path='/posts/' component={PostsList} />
            <Route exact path='/posts/create' component={PostCreate} />
            <Route exact path='/posts/:id?' component={PostInfo} />
            <Route path='/posts/:id?/edit' component={PostEdit} />
        </Switch>

    )
}
