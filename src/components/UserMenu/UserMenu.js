import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Button
        variant="contained"
        startIcon={<LogoutIcon />}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
}
