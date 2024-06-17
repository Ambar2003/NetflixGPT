import React from 'react';
import GPTSeachbar from './GPTSeachbar';
import GPTMovieSuggestion from './GPTMovieSuggestion';
import { background } from '../utils/constant';
const GPTSearch = () => {

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <img src={background} alt="netflix-bg" className="absolute top-0 left-0 h-full w-full object-cover z-0"/>
      <div className="relative z-10 flex flex-col items-center mt-[-15rem]">
        <GPTSeachbar />
        <GPTMovieSuggestion />
      </div>
    </div>
  );
}

export default GPTSearch;
