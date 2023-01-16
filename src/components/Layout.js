import { Outlet } from 'react-router-dom';
import Home from '../routes/Home/Home';
import Header from './Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
