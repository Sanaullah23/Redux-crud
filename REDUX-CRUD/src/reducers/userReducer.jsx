import {createSlice} from '@reduxjs/toolkit'

const userData=[
    {id:1 , name:"sanaullah", email:"sanaullahb.019@gmail.com" },
    {id:2 , name:"marvi rajar", email:"marvirajar24@gmail.com" }
]
const initialState={
    Users:userData
}

const userSlice = createSlice({
    name:"users",
    initialState:initialState,
    reducers:{

    }
})


export default userSlice.reducer;