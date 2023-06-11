import css from './NavAuth.module.css';
import { NavLink } from 'react-router-dom';
import { ButtonGroup, Button } from '@mui/material';

export default function NavAuth() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>
        <NavLink to="/register" className={css.register}>
          Реєстрація
        </NavLink>
      </Button>
      <Button>
        <NavLink to="/login" className={css.login}>
          Логін
        </NavLink>
      </Button>
    </ButtonGroup>
  );
}
