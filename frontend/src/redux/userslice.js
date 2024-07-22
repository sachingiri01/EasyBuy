import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:null,
}

export const userslice = createSlice({
    name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const update_user=createSlice({
  name:'update_user',
  initialState,
  reducers: {
    setUpdate_user: (state, action) => {
      state.user = action.payload;
    },
  }
})


export const { setUser,setUpdate_user } = userslice.actions

export default userslice.reducer