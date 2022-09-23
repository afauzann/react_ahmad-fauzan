import React, { useState } from 'react';
import NavbarListHome from '../NavbarList/NavbarListHome';

function NavbarHome () {

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
                    <button onClick={menuIconClick} className="navbar-close">X</button>
                    <NavbarListHome/>
                </div>
              )}
            </div>
        </div>
    )
}

export default NavbarHome