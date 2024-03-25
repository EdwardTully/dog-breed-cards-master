import React from 'react'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import { addToList } from '../favorites/favoriteSlice';
import {useDispatch} from 'react-redux' 

const DogCard = (props) => {
  const [portrait, setPortrait]= useState({pic: '', info: ''})
  
  const cardTitle = props.title;
  const dogPic = props.pic;
  const breedInfo = props.breedInfo;
  const dogPrice = props.price;

  useEffect(()=> setPortrait({pic: props.pic, info: props.breedInfo}),[props.pic, props.breedInfo])
 
 const dispatch = useDispatch()
  return (
    <div className="card">
      <h3 className="cardTitle">{cardTitle}</h3>
      <div className="picFrame">
        <Link to="/upclose" state={portrait}>
          <img src={dogPic} alt="a dog breed pic" width="300" height="200" />
        </Link>
      </div>
      <p className="info">{breedInfo}</p>
      <div className="onSale"> Price: {dogPrice} </div>
      <button id="submit" onClick={()=>dispatch(addToList({
        breed: cardTitle,
        price: dogPrice
      }))}>Add to Favs</button>
    
    </div>
  );
};

export default DogCard