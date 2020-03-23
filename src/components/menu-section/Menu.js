import React, { useState } from 'react';

import { MenuWrapper } from './menuWrapper';

import logo from '../../assets/img/logo.svg';
import burgerIcon from '../../assets/icons/menu.svg';

const Menu = () => {
  const [menuActive, setMenu] = useState(false);

  return (
    <MenuWrapper>
      <img className="logo" src={logo} alt="logo" />
      <button className="burger-nav" onClick={() => setMenu(!menuActive)}>
        <svg
          className="burger-nav__icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <use xlinkHref={`${burgerIcon}#menu`} alt="icon" />
        </svg>
      </button>
      <nav className={`nav ${menuActive ? 'active' : null}`}>
        <ul className="nav__list">
          <li className="nav__item active">
            <a className="nav__link" href="#">
              Tracking
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              Rates
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              Branches
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </MenuWrapper>
  );
};

export default Menu;
