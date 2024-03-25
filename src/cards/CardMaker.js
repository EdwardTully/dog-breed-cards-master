import React from 'react'
import breedImages from '../dogBreeds'
import DogCard from './DogCard';


const CardMaker = () => {
  return (
    <div id='cardItem'>
      
       {breedImages.map((ea)=>(
        <div key={ea.id}><DogCard title={ea.title} pic={ea.image} breedInfo={ea.info} price = {ea.price}/></div>
       ))}
      

    </div>
  )
}

export default CardMaker