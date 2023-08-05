import { NavLink } from 'react-router-dom';
import style from 'components/Navigation/Navigation.module.css';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink to="/" className={style.link}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={style.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
