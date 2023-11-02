import {configureStore} from '@reduxjs/toolkit'
import loginReducer from './reducers/loginReducers.js'

export default configureStore({
    reducer: {
        login: loginReducer
    }
})