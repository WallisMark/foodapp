import React, { useEffect, useState } from 'react'

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "c829d60b13ac4536b30208b064a0ff2f"



export default function Search( {foodData,setFoodData}) {
    const[search,setSearch] = useState("pizza");
    useEffect(()=>{
        async function fetchFood(){
        const res = await fetch(`${URL}?query=${search}&apiKey=${API_KEY}`);
        const data = await res.json();
        setFoodData(data.results);
    } fetchFood()},[search])

  return (
    <div>
      <input type="text" 
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />

    </div>
  )
}
