import React from 'react'
import { Order } from './Order.css'

const objectToArray = (data) => {
  const array = []
  for (let key in data) {
    array.push({
      name: key,
      value: data[key]
    })
  }
  return array
}

const order = ( {ingredients, price} ) => (
  <div className={ Order }>
    <p>
      Ingredients:
      {objectToArray(ingredients).map(ig => (
        <span
          style={{
            textTransform: 'capitalize',
            margin: '0 8px',
            display: 'inline-block',
            border: '1px solid #ccc',
            padding: '5px'
          }}
          key={ig.name}>
          {ig.name} ({ig.value})
        </span>
      ))}
    </p>
    <p>Price: <strong>USD {price}</strong></p>
  </div>
)

export default order