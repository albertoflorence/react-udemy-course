import React, { Fragment } from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import { SideDrawer, Open, Close } from './SideDrawer.css'
import BackDrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = ({ children, closed, open, onClick, items }) => {
  const attachedClasses = [SideDrawer, open ? Open : Close].join(' ')
  return (
    <Fragment>
      <BackDrop show={open} clicked={closed} />
      <div className={attachedClasses}>
        <Logo height="11%" />
        <nav style={{ marginTop: '30px' }}>
          <NavigationItems items={items} />
        </nav>
      </div>
    </Fragment>
  )
}

export default sideDrawer
