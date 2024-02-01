import { configureStore} from '@reduxjs/toolkit';
import { tasksReducer, filtersReducer } from './slises';

 
export const store = configureStore({
  reducer: {
  tasks: tasksReducer,
    filters: filtersReducer
}
});


