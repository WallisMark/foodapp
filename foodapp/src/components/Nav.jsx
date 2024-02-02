import React from 'react'
import food from '../assets/foodLogo.png'
import styles from './nav.module.css'

export default function Nav() {
  return (
    <div className={styles.nav}>
     <img src={food} alt="Food Logo " height={100} width={100}/> FoodApp
    </div>
  ) 
}
{/* <img src={food} alt="Food Logo " height={100} width={100}/> */}