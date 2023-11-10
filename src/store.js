import {configureStore} from '@reduxjs/toolkit'
import loginReducer from './reducers/reducers.js'

export default configureStore({
    reducer: {
        login: loginReducer
    }
})