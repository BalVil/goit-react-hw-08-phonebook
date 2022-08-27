import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { List, Link } from './MainNav.styled';
import { authSelectors } from 'redux/auth';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <List>
      <Button variant="text">
        <Link to="/">Home</Link>
      </Button>
      {isLoggedIn && (
        <Button variant="text">
          <Link to="contacts">Contacts</Link>
        </Button>
      )}
    </List>
  );
};

export default Navigation;
