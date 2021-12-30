import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/img/ddroidd_logo.svg';
import Button from '../button/Button';
import { GiCookie } from 'react-icons/gi';

const Footer = (props) => {
  return (
    <div className="footer">
      <p className="footerTitle">
        Come to the dark side... we have <GiCookie />
      </p>
    </div>
  );
};

export default Footer;
