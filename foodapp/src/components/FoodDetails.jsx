import React, { useEffect, useState } from 'react'
import styles from './foodDetails.module.css'

export default function FoodDetails({foodId}) {
    const[food,setFood]= useState({})
    const[isLoading,setIsLoading] = useState(true)
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = "c829d60b13ac4536b30208b064a0ff2f"
    useEffect((
        ()=>{
            async function fetchDetails(){
                const res = await fetch(`${URL}?apiKey=${API_KEY}`);
                const data = await res.json();
                console.log(data)
                setFood(data)
                setIsLoading(false)
            }
            fetchDetails()
        }
    ),[foodId])
  return (
    <div>
      <div className={styles.detailsCard}>
           <h1 className={styles.name}>{food.title}</h1>
           <img className={styles.imageRecipe} src={food.image} alt="image"/>
      
         <div className={styles.recipeDetails}>
           <span><strong>{food.readyInMinutes} Minutes</strong></span>
           <span><strong>Serves {food.servings} people</strong></span>
           <span><strong>{food.vegetarian ? "vegetarian" :"Non-vegetarian"}</strong></span>
           <span><strong>{food.vegan ? "Vegan" :""}</strong></span>
         </div>
         <div>
            <span><strong>${parseFloat((food.pricePerServing/100).toPrecision(3))} Per Serving</strong></span>
         </div>
        
         <h2>Dish Types</h2>
         <div className={styles.dishTypes}>
            <ol>
                {isLoading? <p>Data is isLoading...</p>:food.dishTypes.map((dishType)=><li>{dishType}</li>)} 
            </ol>
         </div>

         <h2>Instructions</h2>
         <div className={styles.recipeInstructions}>
            <ol>
              {isLoading? <p>Data is isLoading...</p>: food.analyzedInstructions[0].steps.map((step)=><li>{step.step}</li>)}
            </ol>
            
         </div>
        </div>
      
    </div>
  )
}
