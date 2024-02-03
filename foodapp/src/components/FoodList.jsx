import React from 'react'
import FoodIterm from './FoodIterm'

export default function FoodList({foodData,setFoodId}) {
  return (
    <div>
       {
      foodData.map((food)=>
      <FoodIterm key={food.id} food={food} setFoodId={setFoodId}/>
      )}
    </div>
  )
}
