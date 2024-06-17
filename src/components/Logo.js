import React from 'react'
import { netflixLogo } from '../utils/constant'
export const Logo = () =>{
    return(
        <div className='absolute'>
          <img className = "h-32 mx-1"src = {netflixLogo} alt = "logo"/>
        </div>
      );
    };