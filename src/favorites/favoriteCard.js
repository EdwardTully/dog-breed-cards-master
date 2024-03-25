import React from 'react'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {remove} from './favoriteSlice'


const FavoriteCard = (props) => {

  const [breed, setBreed] = React.useState();
  const [ind, setInd]= React.useState()

  useEffect(() => {
    setBreed(props.breed);
  }, [props.breed]);
  
    const dispatch = useDispatch()
  useEffect(()=>{
    setInd(props.index)
  },[props.index])

    //there is a problem with props.breed, breed= undefined
  return (
    <div className='favCard'>
        <h3 className='favTitle'>{breed}{ind}</h3>
        <button onClick={()=>dispatch(remove(breed))}>Remove</button>
    </div>
  )
}

export default FavoriteCard