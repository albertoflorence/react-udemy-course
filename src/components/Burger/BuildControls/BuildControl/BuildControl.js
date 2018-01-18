import React from 'react'
import {BuildControl, Label, Less, More} from './BuildControl.css'

const buildControl = ({label, remove, add, disabled}) => (
  <div className={BuildControl}>
    <div className={Label}>{label}</div>
    <button className={Less} onClick={remove} disabled={disabled}>Less</button>
    <button className={More} onClick={add}>More</button>
  </div>
)

export default buildControl