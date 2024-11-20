import { Outlet } from 'react-router-dom';
import AppPhonebook from '../AppPhonebook/AppPhonebook';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <div>
        <AppPhonebook />
        <main>
          <div className={css.mainBox}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
