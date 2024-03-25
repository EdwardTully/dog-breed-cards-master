import React from 'react'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {remove} from './favoriteSlice'


const FavoriteCard = (props) => {

  const [breed, setBreed] = React.useState();
  const [price, setPrice]= React.useState()

  useEffect(() => {
    setBreed(props.breed);
  }, [props.breed]);
  
    const dispatch = useDispatch()

  useEffect(()=>{
    setPrice(props.price)
  },[props.price])

   
  return (
    <div className='favCard'>
        <h3 className='favTitle'>{breed}<br/>{price}</h3>
        <button onClick={()=>dispatch(remove(breed))}>Remove</button>
    </div>
  )
}

export default FavoriteCard