import React from 'react'
import { IMG_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  if(!posterPath)return null;
  return(
    <div className="w-60 mx-2">
        <img alt = "movie-card" src = {IMG_URL + posterPath}></img>
    </div>
  )
}

export default MovieCard
