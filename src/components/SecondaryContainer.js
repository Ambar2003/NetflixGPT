import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  const popularMovies = useSelector((store)=> store.popMovies?.playingPopMovies);
  return (
    movies.nowPlayingMovies && movies.popularMovies && movies.trendingMovies && movies.upComingMovies && <div className="bg-gray-800 w-[99vw]">
      <div className="p-2 mx-2">
          <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies}></MovieList>
      </div>
      <div className = "p-2 mx-2">
      <MovieList title = {"Trending"} movies = {movies.trendingMovies}></MovieList>
      <MovieList title = {"Popular"} movies = {movies.popularMovies}></MovieList>
      <MovieList title = {"Upcoming"} movies = {movies.upComingMovies}></MovieList>
      </div>
    </div>
  )
}

export default SecondaryContainer;
