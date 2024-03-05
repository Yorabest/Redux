import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';


export const AppBar = () => {
const logedIn = useSelector(selectIsLoggedIn)
  return (
    <header>
    {logedIn ? <><Navigation /> <UserMenu /></> :  <AuthNav />}
      
         
    </header>
  );
};