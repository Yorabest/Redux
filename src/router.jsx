import { App } from "components/App";
import { RestrictedRout } from "./components/RestrictrdRout";
import { Home, Login, Register, Tasks } from 'pages';
import { createBrowserRouter } from "react-router-dom"

export const tasksRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
    {
        index: true,
        element: <Home/>
    },
    {
        path: '/tasks',
        element: <Tasks/>
    },
    {
        path: '/login',
        element: <RestrictedRout element={Login} redirectTo="/tasks"/>
    },
    {
        path: '/register',
        element: <Register/>
    }
    ]
    }
])