import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavBar.module.scss';

const NavBar: React.FC = () => (
  <nav className={classes.component}>
    <NavLink className={({ isActive }) => (isActive ? classes.active : classes.link)} to="/">Домашняя страница</NavLink>
    <NavLink id="about-page-link" className={({ isActive }) => (isActive ? classes.active : classes.link)} to="/about">О проекте</NavLink>
  </nav>
);

export default NavBar;
