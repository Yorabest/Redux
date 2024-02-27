// /
// /tasks 
import { createBrowserRouter } from "react-router-dom";
// import { Layout } from "components/Layout/Layout";
// import { TaskList } from "components/TaskList/TaskList";
import { HomePage, LogIn, SignIn, Tasks } from "pages";
import { App } from "components/App";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomePage/>
        },
            {
                path: '/tasks',
                element: <Tasks/>
            },
            {
                path: '/login',
                element: <LogIn/>
            },
            {
                path: '/signin',
                element: <SignIn/>
            },
        ]
    }]
)