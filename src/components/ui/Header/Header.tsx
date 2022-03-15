import React from 'react';

import NavBar from '../NavBar';
import classes from './Header.module.scss';

const Header: React.FC = () => (
  <header className={classes.component}>
    <h1 className={`${classes.title} header_title`}>Foods</h1>
    <NavBar />
  </header>
);

export default Header;
