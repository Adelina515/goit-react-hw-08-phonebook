import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import style from 'components/RegisterForm/RegisterForm.module.css';

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
    <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={style.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={style.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={style.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
