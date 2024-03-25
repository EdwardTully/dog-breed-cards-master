import CardMaker from "./cards/CardMaker";
import Favorites from './favorites/Favorites'


import React from 'react'

const Home = () => {
  return (
    <div>
         <div className="layout">
              <h1 id="title">
                'Cards of Things': with React, React Router, Array of
                Objects, useEffect, useState, useLocation, and passing props through Link tag
              </h1>
          
               
              
              <CardMaker />
            </div>
            <Favorites>ddfdfdfd</Favorites>
    </div>
  )
}

export default Home