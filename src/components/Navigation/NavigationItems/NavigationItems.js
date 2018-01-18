import React from 'react'

import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = ({ items }) => {
  return (
    <ul className={classes.NavigationItems}>
      {items.map(({ link, name }) => (
        <NavigationItem link={link} key={name}>
          {' '}
          {name}{' '}
        </NavigationItem>
      ))}
    </ul>
  )
}

export default navigationItems
