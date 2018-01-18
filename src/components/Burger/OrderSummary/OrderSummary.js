import React, { Fragment } from 'react'
import Button from '../../UI/Button/Button'

const orderSummary = ({
  ingredients,
  purchaseContinue,
  purchaseCancel,
  totalPrice
}) => {
  const ingredientSummary = Object.keys(ingredients).map(key => (
    <li key={key}>
      <span style={{ textTransform: 'capitalize' }}> {key} </span>:{' '}
      {ingredients[key]}
    </li>
  ))
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {totalPrice}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button flat onClick={purchaseContinue} color="Success">
        CONTINUE
      </Button>
      <Button flat onClick={purchaseCancel} color="Danger">
        CANCEL
      </Button>
    </Fragment>
  )
}

export default orderSummary
