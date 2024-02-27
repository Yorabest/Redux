import { NavLink } from "react-router-dom"

export const Navigation = ()=>{
    return <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/tasks'>Tasks</NavLink></li>
        <li><NavLink to='/login'>Log in</NavLink></li>
        <li><NavLink to='/signin'>Sign in</NavLink></li>
    </ul>
}