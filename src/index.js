import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider} from "react-redux";
import { persistor, store } from "./redux/store";
import { RouterProvider } from 'react-router-dom';
import { tasksRouter } from './router';
import { PersistGate } from 'redux-persist/integration/react';
/**
 * rename selectors
 * create selectVisibleTasks
 * create selectTaskCount
 * optimization with createSelector
 */


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
    <Provider store={store}>
      <RouterProvider router={tasksRouter}>
        <App /> 
       </RouterProvider>
      </Provider>
      </PersistGate>
  </React.StrictMode>
);
