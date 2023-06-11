import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import css from './LoginForm.module.css';
import { Card, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.form}>
      <Card className={css.card}>
        <Typography variant="h4" component="h4">
          Вхід
        </Typography>
        <form onSubmit={handleSubmit} autoComplete="off">
          <label className={css.label}>
            <TextField label="Пошта" type="email" name="email" />
          </label>
          <label className={css.label}>
            <TextField label="Пароль"  type="password" name="password" />
          </label>
          <Button variant="contained" type="submit">Логін</Button>
        </form>
      </Card>
    </div>

  );
};
