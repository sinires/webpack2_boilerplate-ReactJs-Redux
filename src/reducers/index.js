/**
 * Created by ftalaev on 07.03.17.
 */
import { combineReducers } from 'redux'
import page from './page'
import user from './user'

export default combineReducers({
    page,
    user
})