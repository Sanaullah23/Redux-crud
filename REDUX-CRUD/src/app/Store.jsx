import {configureStore} from '@reduxjs/toolkit'
import userSlice from '../reducers/userReducer'
const store= configureStore({
    reducer:{
        users:userSlice
    }
})

export default store