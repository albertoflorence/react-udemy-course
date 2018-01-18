import React from 'react'
import { BuildControls, OrderButton } from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const buildControls = ({
  addIngredient,
  removeIngredient,
  disabled,
  price,
  purchasable,
  ordered,
  buttonText
}) => {
  return (
    <div className={BuildControls}>
      <p>
        Current Price: <strong>{price}</strong>
      </p>
      {controls.map(({ label, type }) => (
        <BuildControl
          label={label}
          key={label}
          add={() => addIngredient(type)}
          remove={() => removeIngredient(type)}
          disabled={disabled[type]}
        />
      ))}
      <button className={OrderButton} disabled={!purchasable} onClick={ordered}>
        {buttonText}
      </button>
    </div>
  )
}

export default buildControls
