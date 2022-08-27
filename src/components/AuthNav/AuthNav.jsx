import Button from '@mui/material/Button';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { List, Link } from 'components/MainNav/MainNav.styled';

export default function AuthNav() {
  return (
    <List>
      <Button
        sx={{
          color: '#f1f3f5',
          marginRight: 3,
        }}
        variant="text"
        endIcon={<AssignmentIndOutlinedIcon />}
      >
        <Link to="/register">Sign up</Link>
      </Button>
      <Button
        sx={{
          color: '#f1f3f5',
        }}
        variant="text"
        endIcon={<LoginOutlinedIcon />}
      >
        <Link to="/login">Log In</Link>
      </Button>
    </List>
  );
}
