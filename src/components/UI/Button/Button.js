import React from 'react'
import { Button } from './Button.css'

const colors = {
  Success: '#5c9210',
  Danger: '#944317'
}

const button = ({ children, color, onClick, flat, ...props }) => {
  const style = {
    color: colors[color],
    border: flat ? 'none' : ''
  }

  return (
    <button
      style={style}
      {...props}
      onClick={onClick}
      className={[Button, colors[color]].join(' ')}
    >
      {children}
    </button>
  )
}

export default button
