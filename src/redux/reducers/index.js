import { combineReducers } from 'redux';

import { postReducers } from './postReducers';
import { authReducers } from './authReducer';

export default combineReducers({
    posts: postReducers,
    auth: authReducers
});