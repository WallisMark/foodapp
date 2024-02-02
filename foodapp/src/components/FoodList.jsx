import React from 'react'
import FoodIterm from './FoodIterm'

export default function FoodList({foodData}) {
  return (
    <div>
       {
      foodData.map((food)=>
      <FoodIterm key={food.id} food={food}/>
      )}
    </div>
  )
}
