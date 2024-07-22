import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTMovieSuggestion = () => {
  const{movieResults,movieNames} = useSelector((store) => store.gpt);
  if(!movieNames || !movieResults || !movieNames.length || !movieResults.length) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70">
      <div>
        {movieName.map((movieName,index)=>(
        <MovieList
        key = {movieName} 
        title = {movieName} 
        movies={movieResults[index]}
        />
        ))}
        </div>
        </div>
  );
};

export default GPTMovieSuggestion;
