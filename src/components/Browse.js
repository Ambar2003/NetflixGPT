import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlaying';
import usePopularMovies from '../Hooks/usePopularMovies';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import useTrendingMovies from '../Hooks/useTrendingMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();
  return (
    <div>
      <Header></Header>
      {showGPTSearch? <GPTSearch></GPTSearch>
      :
      <>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
      </>
      
}
    </div>
    
      /*
        MainContainer
          -VideoBackground
          -VideoTitle
          SecondaryContainer
          -MovieList * n
          - cards * n
      */
  )
}

export default Browse;
