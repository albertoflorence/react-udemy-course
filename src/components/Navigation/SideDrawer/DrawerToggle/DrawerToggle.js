import React from 'react'
import { DrawerToggle } from './DrawerToggle.css'
const drawerToggle = ({onClick}) => (
  <div 
    className={DrawerToggle}
    onClick={onClick}
    onKeyPress={() => ''}
    role="presentation">
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export default drawerToggle