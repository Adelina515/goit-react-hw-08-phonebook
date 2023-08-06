import style from 'components/UserMenu/UserMenu.module.css';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div className={style.wrapper}>
      <p className={style.mail}>{user.email}</p>
      <button
        className={style.btnLogOut}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
