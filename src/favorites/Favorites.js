import React, {useState, useEffect} from 'react'
import FavoriteCard from './favoriteCard'
import {useSelector} from 'react-redux'

const Favorites = () => {

const [favObj, setFavObj]=useState([''])

const favArray = useSelector((state)=>state.favorites.faves)
 
 useEffect(()=>{
  setFavObj(favArray)

 },[favArray])
  

console.log(favObj)

 

  return (
    <div className='favoriteBox'>
      <h3>Favorites</h3>
      {favObj && favObj.map((ea) => (
          <div key={favObj.indexOf(ea)}>
            <FavoriteCard breed={ea.breed} price={ea.price} />
          </div>
        ))}
    </div>
  );
};

export default Favorites