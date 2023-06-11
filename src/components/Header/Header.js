import css from './Header.module.css';
import { useAuth } from '../../hooks/useAuth';
import NavAuth from '../NavAuth/NavAuth';
import UserMenu from '../UserMenu/UserMenu';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export default function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <h1 className={css.logo}>
        <StarIcon sx={{ fontSize: 40 }} />
        <StarIcon sx={{ fontSize: 40 }} />
        <StarIcon sx={{ fontSize: 40 }} />
        <StarHalfIcon sx={{ fontSize: 40 }} />
        <StarOutlineIcon sx={{ fontSize: 40 }} />
        е-Ворог
      </h1>
      {isLoggedIn ? <UserMenu /> : <NavAuth />}
    </header>
  );
}
