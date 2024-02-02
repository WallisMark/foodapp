import React from 'react'

export default function FoodIterm({food}) {
  return (
    <div>
        <img src={food.image} alt="" />
      <h1>{food.title}</h1>
      <button>Vie Recipe</button>
    </div>
  )
}
