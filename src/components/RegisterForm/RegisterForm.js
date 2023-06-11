import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import css from './RegisterForm.module.css';
import Button from '@mui/material/Button';
import { Card, TextField, Typography } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.form}>
      <Card className={css.card}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Typography variant="h4" component="h4">
            Реєстрація
          </Typography>
          <label className={css.label}>
            <TextField label="Username" type="username" name="name" />
          </label>
          <label className={css.label}>
            <TextField label="Пошта" type="email" name="email" />
          </label>
          <label className={css.label}>
            <TextField label="Пароль" type="password" name="password" />
          </label>
          <Button variant="contained" type="submit">
            Register
          </Button>
        </form>
      </Card>
    </div>
  );
};
