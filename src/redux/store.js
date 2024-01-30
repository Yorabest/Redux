import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { tasksReducer, filtersReducer } from './slises';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  tasks: tasksReducer,
    filters: filtersReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);
 
export const store = configureStore(persistedReducer);

export const persistor = persistStore(store)

