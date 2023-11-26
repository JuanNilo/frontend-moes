
import React from 'react';
import SideBar from './sideBar';

const Layout: React.FC = ({ children }) => {
  return (
    <div className='flex'>
        <SideBar/>
        {children}
    </div>
  );
};

export default Layout;
