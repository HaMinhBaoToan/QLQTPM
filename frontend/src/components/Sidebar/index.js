import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './styles.scss';
import { IconContext } from 'react-icons';

function Sidebar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className='sidebar'>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars-hide'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars-show'>
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <div className='icon'>{item.icon}</div>
                    <span>{item.title}</span>  

                    <div className={item.cNameExit}>
                      <a href="/exit">
                        <div>
                          <span className='icon'>{item.iconExit}</span>
                          <span className='exit'>{item.titleExit}</span>
                        </div>
                      </a> 
                    </div>                                   
                  </Link>
                </li>              
              );
            })}

            {/* <li className='navbar-exit'>
              <span className='menu-bars-exit'>
              <IoIcons.IoMdExit/>
                <a href="#">
                {item.titleExit}
                </a>
              </span>
            </li> */}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Sidebar;