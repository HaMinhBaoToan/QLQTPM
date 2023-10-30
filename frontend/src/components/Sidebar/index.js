import React from 'react';
// import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import { NavLink, Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './styles.scss';
import { IconContext } from 'react-icons';

function Sidebar({ sidebar, showSidebar, setAccessToken }) {
  // const logOut = () => {
  //   const tokenString = localStorage.getItem("QuanLyKinhDoanh_Token");
  //   if (tokenString) {
  //     localStorage.removeItem("QuanLyKinhDoanh_Token");
  //     setAccessToken(false);
  //   }
  // };
  return (
    <div className='sidebar'>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={!sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
              <div className="project-name">Project SmartMan</div>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className='nav-text'>
                  <NavLink to={item.path} end className={(navData) => navData.isActive ? "active-navlink" : ""} >
                    <div className='icon'>{item.icon}</div>
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}

              <li className='nav-text navbar-exit'>
                <NavLink to='/'>
                {/* onClick={logOut} */}
                  <div className='icon'>{<IoIcons.IoMdExit />}</div>
                  <span>Thoát</span>
                </NavLink>
              </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Sidebar;