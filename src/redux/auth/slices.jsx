import { createSlice } from "@reduxjs/toolkit";
import { Sigining } from "./operatons";

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null
        },
        token: null,
        isLogedIn: false, 
        isRefrashing: false
    },
    extraReducers(builder){
        builder
        .addCase(Sigining.fulfilled, (state, action)=>{
            state.user.name = action.payload.body.name
            state.email.name = action.payload.body.email
        })
    }
})