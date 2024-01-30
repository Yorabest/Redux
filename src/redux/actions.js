import {nanoid} from 'nanoid'

export const addTask = (text) =>( {
type: 'tasks/addTask',
payload: {
    id: nanoid(),
    text,
    complited: false,
},
})

// export const addTask = createAction()

export const deleteTask = (taskId) => ({
    type: 'tasks/deleteTask',
    payload: taskId
})

export const toggleCompleted = (taskId) => ({
    type: 'tasks/toggleCompleted',
    payload: taskId
})

export const changeFilter = (value) => ({
    type: 'filters/changeFilter',
    payload: value
})