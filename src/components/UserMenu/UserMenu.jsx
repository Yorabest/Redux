import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../redux/auth/operations';
export const UserMenu = () => {
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(logOut())
    }
    return (
        <>
            <h1>Hello user</h1>
            <NavLink to='/' onClick={handleOnClick}>Logout</NavLink>
            {/* <button type="button">Logout</button> */}
        </>
    )
    }