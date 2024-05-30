import { createSlice } from '@reduxjs/toolkit';

const initial = JSON.parse(localStorage.getItem('users')) || []; // Load from local storage or use empty array

const userSlice = createSlice({
  name: 'users',
  initialState: initial,
  reducers: {
    createUser(state, action) {
      state.push(action.payload);
      localStorage.setItem('users', JSON.stringify(state)); // Update local storage after creating a user
    },
    updateUser(state, action) {
      const {name, email } = action.payload;
      const findUser = state.find(user => user.id == action.payload.id);
      if (findUser) {
        findUser.name = name;
        findUser.email = email;
        localStorage.setItem('users', JSON.stringify(state)); // Update local storage after updating a user
      } else {
        console.log("User not found");
      }
    },

    deleteUser:(state, action)=>{
      const deleteUser= state.filter(user=> user.id !== action.payload)
      console.log(deleteUser)
      localStorage.setItem('users', JSON.stringify(deleteUser));
      return deleteUser
    }
  },
});

export const { createUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
