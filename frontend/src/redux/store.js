import { configureStore } from '@reduxjs/toolkit'
import { setUser } from './userslice'
import userreducer from "./userslice"
import updateuser from "./update_user"
export const store = configureStore({
  reducer: {
   user:userreducer,
   update_user:updateuser
  },
})
