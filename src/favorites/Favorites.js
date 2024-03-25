import React from 'react'
import FavoriteCard from './favoriteCard'
import {useSelector} from 'react-redux'

const Favorites = () => {
  const favObj = useSelector((state) => state.favorite.breed);
 

  return (
    <div className='favoriteBox'>
      {favObj && favObj.map((ea) => (
          <div key={favObj.indexOf(ea)}>
            <FavoriteCard breed={ea} index={favObj.indexOf(ea)} />
          </div>
        ))}
    </div>
  );
};

export default Favorites