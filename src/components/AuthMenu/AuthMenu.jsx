import { NavLink } from "react-router-dom"

export const AuthMenu = () => {
    return <>
    <NavLink to='/signin'>Sign in</NavLink>
    <NavLink to='/login'>Log in</NavLink></>

}