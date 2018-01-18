import React from 'react'
import { Loader } from './Spinner.css'

const spinner = ({ children=null, isLoading }) =>
  isLoading 
    ? <div className={Loader}>Loading...</div>
    : children

export default spinner