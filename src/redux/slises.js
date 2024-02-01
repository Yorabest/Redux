import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constants';
import { addTask, fetchTasks } from './operation';

const tasksSlise = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  // reducers: {
  //   addTask(state, action) {
  //     state.push(action.payload)
  //   },

  //   deleteTask(state, action) {
  //      return state.filter((task) => {
  //       return task.id !== action.payload
  //     })
  //   },

  //   toggleCompleted(state, action) {
  //      return state.map((task) => {
  //       if (task.id !== action.payload) {
  //         return task
  //       } 
  //         return {...task, completed: !task.completed}
        
  //     })
  //   }
  // }
  extraReducers(builder) {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
      state.error = action.payload
      })
      .addCase(addTask.pending, (state, action) => {
       state.isLoading = true;
      })
     .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
      state.error = action.payload
      })
  }
})

const filtersSlise = createSlice({
  name: 'filters',
  initialState: {
  status: statusFilters.all,
  },
  reducers: {
    changeFilter(state, action) {
         state.status =  action.payload
    }
  }
})

export const tasksReducer = tasksSlise.reducer;
export const filtersReducer = filtersSlise.reducer;

// export const { addTask, deleteTask, toggleCompleted } = tasksSlise.actions;
export const { changeFilter } = filtersSlise.actions
