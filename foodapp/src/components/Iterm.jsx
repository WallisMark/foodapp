import React from 'react'
import styles from './item.module.css'

export default function Iterm({ingredients}) {
  return (
    <div>
        <div className={styles.itemContainer}>
            <div className= {styles.imageContainer}> 
            <img className={styles.image} src={`https://spoonacular.com/cdn/ingredients_100x100/`+ingredients.image} alt="ingredients image" />
            </div>
            <div className={styles.nameContainer}>
                <div className={styles.name}>{ingredients.name} </div>
                <div className={styles.amount}>{ingredients.amount} {ingredients.unit}</div>
            </div>
            
        </div>
    </div>
  )
}
