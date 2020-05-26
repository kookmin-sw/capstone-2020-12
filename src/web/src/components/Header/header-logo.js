import React from 'react';
import logo from '../../Image/logo.png';
import { Link } from 'react-router-dom';

function HeaderLogo () {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="logo"
        style={{ width: '150px', paddingLeft: '15px' }}
      />
    </Link>
  );
}

export default HeaderLogo;