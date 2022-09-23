import React, { useState } from 'react';
import NavbarListAbout from '../NavbarList/NavbarListAbout';

function NavbarAbout () {

    const [menuCollapse, setMenuCollapse] = useState(false)

    const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

    return (
        <div collapsed={menuCollapse}>
            <div >
            {menuCollapse ? (
                <button onClick={menuIconClick} className="navbar-open">☰</button>
              ) : (
                <div>
                    <button onClick={menuIconClick} className="navbar-close-about">X</button>
                    <NavbarListAbout/>
                </div>
              )}
            </div>
        </div>
    )
}

export default NavbarAbout