import {createSlice} from '@reduxjs/toolkit'

const userData=[

]
// const initialState={
//     Users:[]
// }

const userSlice = createSlice({
    name:"users",
    initialState:userData,
    reducers:{
        createUser:(state, action)=>{
            state.push(action.payload);
        }

    }
})


export const {createUser} = userSlice.actions;
export default userSlice.reducer;