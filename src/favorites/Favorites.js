import React, {useState, useEffect} from 'react'
import FavoriteCard from './favoriteCard'
import {useSelector} from 'react-redux'

const Favorites = () => {


  const favObj = useSelector((state)=>state.favorites.faves)

console.log(favObj)

 

  return (
    <div className='favoriteBox'>
      {favObj && favObj.map((ea) => (
          <div key={favObj.indexOf(ea)}>
            <FavoriteCard breed={ea.breed} price={ea.price} />
          </div>
        ))}
    </div>
  );
};

export default Favorites