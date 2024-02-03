import React from 'react'
import styles from './foodIterm.module.css'


export default function FoodIterm({food,setFoodId}) {
  function handleShowDetails(){
    console.log(food.id)
    setFoodId(food.id)
    
  }
  
  return (
    <div className={styles.itermContainer}>
      <img className={styles.itermImage} src={food.image} alt="" />
      <div className={styles.itermContent}>
         <p className={styles.itermName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
         <button onClick ={()=>handleShowDetails()} className={styles.itermButton}>View Recipe</button>
      </div>
      
    </div>
  )
}
