import { combineReducers } from "redux";
import postList from './PostList/reducer'
import post from './PostInfo/reducer'


export default combineReducers({
    postList,
    post
});
