import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { statusFilters } from './constants';
import { addTask, deleteTask, fetchTasks, toggleCompleted } from './operation';

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
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        const idx = state.items.findIndex((task) => task.id === action.payload);
        state.items.splice(idx, 1)
      })
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        const idx = state.items.findIndex((task) => task.id === action.payload.id);
        state.items.splice(idx, 1, action.payload)
      })
      .addMatcher(isAnyOf(fetchTasks.pending, addTask.pending, deleteTask.pending, toggleCompleted.pending), (state) => {
        state.isLoading = true;
      })
    .addMatcher(isAnyOf(fetchTasks.rejected ,addTask.rejected ,deleteTask.rejected ,toggleCompleted.rejected),(state, action) => {
        state.error = action.payload
    })
    .addMatcher(isAnyOf(fetchTasks.fulfilled, addTask.fulfilled, deleteTask.fulfilled ,toggleCompleted.fulfilled),(state) => {
        state.isLoading = false;
        state.error = null;
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
