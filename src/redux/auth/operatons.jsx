import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/'

export const Sigining = createAsyncThunk('users/signin', async ({body})=>{
    const res = await axios.post('users/singin', {body})
    return res.data
})

export const Logining = createAsyncThunk('users/signin')

export const Logouting = createAsyncThunk('users/logout')