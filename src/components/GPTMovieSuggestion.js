import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GPTMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  console.log(movieResults);
  console.log(movieNames);

  if (!movieNames || !movieResults || !movieNames.length || !movieResults.length) return null;

  return (
    <div className="p-4 bg-black text-white bg-opacity-70 rounded-lg w-full max-w-5xl">
      <div className="space-y-4">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestion;
