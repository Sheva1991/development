import { combineReducers } from "redux";
import userList from './UserList/reducer'
import user from './UserInfo/reducer'


export default combineReducers({
    userList,
    user
});
