import React from 'react'
import Iterm from './Iterm'

export default function IngredientsItem({food,isLoading}) {
  return (
    <div>
      <div>
            {isLoading? <p>Loading...</p>:food.extendedIngredients.map((ingredients)=>
           <Iterm ingredients={ingredients}/>
            
            )}
        </div> 
    </div>
  )
}
