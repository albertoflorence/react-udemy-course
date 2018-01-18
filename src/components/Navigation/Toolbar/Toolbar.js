import React from 'react'

import { Toolbar, DesktopOnly } from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = ({ sideDrawerClick, items }) => (
  <header className={Toolbar}>
    <DrawerToggle onClick={sideDrawerClick} />
    <Logo height="80%" />
    <nav className={DesktopOnly}>
      <NavigationItems items={items} />
    </nav>
  </header>
)

export default toolbar
