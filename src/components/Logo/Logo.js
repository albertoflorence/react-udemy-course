import React from 'react';
import burgerLogo from '../../assets/burger-logo.png'
import {Logo} from './Logo.css'
const logo = ({height}) => (
  <div className={Logo} style={{height}}>
    <img src={burgerLogo} alt="MyBurger"/>
  </div>
)

export default logo;