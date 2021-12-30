import React from 'react';
import Destructuring from '../../assets/img/destructuring.svg';
import WebPage_logo from '../../assets/img/WebPage_logo.svg';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

const Welcome = (props) => {
  return (
    <div className="container">
      <div className="content">
        <div className="inner">
          <img src={Destructuring} alt="destructuring" />
          <img src={WebPage_logo} alt="webPageLogo" />
        </div>
        <Link className="inContentBtn" to="/application">
          Join Us
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
