import React from 'react'
import { Burger } from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import { map } from '../../util'

const burger = ({ ingredients }) => {
  if (typeof ingredients !== 'object') return null
  let transformedIngredients = map(ingredients, (qty, type) =>
    [...Array(qty)].map((_, i) => (
      <BurgerIngredient key={type + i} type={type} />
    ))
  ).reduce((arr, ingredient) => arr.concat(ingredient), [])
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients !</p>
  }
  return (
    <div className={Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger
