import React from 'react'
import { Backdrop } from './Backdrop.css'

const backdrop = ({ show, clicked }) =>
  show ? (
    <div
      role="presentation"
      className={Backdrop}
      onClick={clicked}
      onKeyPress={e => (e.keyCode === 27 ? clicked() : null)}
    />
  ) : null

export default backdrop
