import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:null,
}

export const userslice=createSlice({
  name:'update_user',
  initialState,
  reducers: {
    setUpdate_user: (state, action) => {
      state.user = action.payload;
    },
  }
})


export const {setUpdate_user } = userslice.actions

export default userslice.reducer