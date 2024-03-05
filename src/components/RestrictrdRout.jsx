import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const RestrictedRout = ({element: Component, redirectTo = '/'}) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    // console.log(Component);
    // console.log(redirectTo);
return isLoggedIn ? <Navigate to={redirectTo}/> : <Component/>
}