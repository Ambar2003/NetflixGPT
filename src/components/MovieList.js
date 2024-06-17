import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div>
        <h1 className="text-white text-2xl m-2">{title}</h1>
      <div className="flex overflow-x-scroll">
         <div className="flex">
            {movies.map((movie) => (
              <MovieCard 
                key={movie.id}  // Assuming each movie has a unique id
                posterPath={movie.poster_path}
              />
            ))}
        </div>
       
      </div>
    </div>
  )
}

export default MovieList;
