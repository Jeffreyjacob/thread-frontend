import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../lib/type";

type IntitalState = {
    user:UserType | null,
    auth:boolean
}

const initialState:IntitalState = {
    user:null,
    auth:false
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
       SaveUser:(state,action:PayloadAction<UserType>)=>{
          state.user = action.payload,
          state.auth = true
       },
       Logout:(state)=>{
         state.user = null,
         state.auth = false
       }
    }
})

export const {SaveUser,Logout} = userSlice.actions;
export default userSlice.reducer
