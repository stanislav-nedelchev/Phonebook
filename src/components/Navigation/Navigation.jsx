import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <nav className={css.navigation}>
        <NavLink to="/">Phonebook</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </nav>
    </div>
  );
};

export default Navigation;
