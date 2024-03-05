// const { createAsyncThunk } = require("@reduxjs/toolkit");
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// axios.defaults.baseURL = 'https://65b92f3ab71048505a8a61b9.mockapi.io/'

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
        const res = await axios.post('tasks', { text })
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue('Uoops, somethink wrong')
    }
})

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId, thunkAPI) => {
    try {
        const res = await axios.delete(`tasks/${taskId}`)
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue('Uops')
    }
})

export const toggleCompleted = createAsyncThunk('tasks/toggleCompleted', async (task, thunkAPI) => {
    try {
        const res = await axios.put(`tasks/${task.id}`, {completed: !task.completed})
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue('Uops')
    }
})