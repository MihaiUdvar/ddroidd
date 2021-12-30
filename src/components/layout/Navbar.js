import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/img/ddroidd_logo.svg';
import Button from '../button/Button';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/">
            <img src={Logo} alt="React Logo" />
          </NavLink>
        </li>
        <li>
          <p className="navbarTitle">Winter Internship</p>
        </li>
        <li>
          <NavLink to="/application">
            <Button></Button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
