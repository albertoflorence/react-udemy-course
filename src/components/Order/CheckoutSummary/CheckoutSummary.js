import React from 'react'
import { CheckoutSummary } from './CheckoutSummary.css'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

const checkoutSummary = ({ ingredients, checkoutContinue, checkoutCancel }) => {
  return (
    <div className={CheckoutSummary}>
      <h1>We hope it testes well !! </h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button flat onClick={checkoutCancel} color="Danger">
        CANCEL
      </Button>
      <Button flat onClick={checkoutContinue} color="Success">
        ACCEPT
      </Button>
    </div>
  )
}

export default checkoutSummary
