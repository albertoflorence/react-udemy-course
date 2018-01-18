import React from 'react'

import classes from './NavigationItem.css'
import { NavLink } from 'react-router-dom';

const navigationItem = ( {children, link} ) => (
  <li className={classes.NavigationItem}>
    <NavLink 
      to={link} 
      activeClassName={classes.active}
      exact>
      {children}
    </NavLink>
  </li>
)

export default navigationItem;