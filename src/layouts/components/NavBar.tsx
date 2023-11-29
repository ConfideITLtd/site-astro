import React, { useState } from 'react';
import Headroom from 'react-headroom';
import { Fade as Hamburger } from 'hamburger-react';


const NavBar = ({
  color,
  logo,
  navMenu,
  navButton,
}: {
  color: string;
  logo: any;
  navMenu: any;
  navButton: any;
}) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Headroom className={isOpen ? 'open' : ''} disableInlineStyles={true}>
      <header className="header">
        <nav className="navbar container">
          <div className="order-0">
            {logo}
          </div>
          {navMenu}
          {navButton}
          <Hamburger toggled={isOpen} color={color} toggle={setOpen} />
        </nav>
      </header>
    </Headroom>
  );
};

export default NavBar;
