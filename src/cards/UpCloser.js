import React from 'react'
import {Link, useLocation} from 'react-router-dom'



const UpCloser = () => {
  const getPortrait = useLocation()
  const {pic, info}= getPortrait.state
  

  return (
    <div className="ppicFrame">
      <Link to="/home"> <img
        className="portrait"
        src={pic}
        alt=""
        width="1200"
        height="850"
      /> </Link>

      
      <p className='article'>{info}</p>
     
        
     
    </div>
  );
};

export default UpCloser