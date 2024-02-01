// const { createAsyncThunk } = require("@reduxjs/toolkit");
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.baseURL = 'https://65b92f3ab71048505a8a61b9.mockapi.io/'

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async (_, thunkAPI) => {
    try {
        const res = await axios.get('/tasks')
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue('Uoops, somethink wrong')
    }
})

export const addTask = createAsyncThunk('tasks/addTask', async (text, thunkAPI) => {
    try {
        const res = await axios.post('task', { text })
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue('Uoops, somethink wrong')
    }
})