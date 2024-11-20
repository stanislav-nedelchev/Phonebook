import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => (
  <div className={css.authNav}>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/register">Register</NavLink>
  </div>
);

export default AuthNav;
