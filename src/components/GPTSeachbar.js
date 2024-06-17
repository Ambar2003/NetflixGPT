import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { addGptMovieResult } from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/constant";

const GPTSeachbar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);
  const toggleLanguageDropDown = useSelector((store) => store.gpt.showGPTSearch);
  const [error, setError] = useState(null);
  const [showFullError, setShowFullError] = useState(false);

  const handleGPTSearch = async () => {
    setError(null); // Clear previous errors
    const gptQuery =
      "Act as a movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      " only give me 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    try {
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      console.log(gptResults);

      if (!gptResults.choices) {
        throw new Error("No choices returned from GPT API.");
      }

      const gptMovies = gptResults.choices[0]?.message?.content.split(",");
      if (!gptMovies) {
        throw new Error("No movies returned by GPT.");
      }

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie.trim()));
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
    } catch (error) {
      console.error("Error fetching GPT results:", error);
      setError(error.message);
    }
  };

  const searchMovieTMDB = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error(`TMDB API error: ${response.statusText}`);
      }

      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error(`Error searching movie on TMDB (${movie}):`, error);
      setError(error.message);
      return [];
    }
  };

  const getFirstSentence = (text) => {
    const match = text.match(/[^.!?]*[.!?]/);
    return match ? match[0] : text;
  };

  return (
    <div className="md:bg-gray-800 p-4 rounded-2xl">
      <input
        ref={searchText}
        type="text"
        placeholder={lang[langKey].gptSearchPlaceHolder}
        className="md:bg-purple-300 px-5 py-3 text-xl w-full md:w-[50rem]"
      />
      <button
        className="my-4 md:m-4 p-1 text-white text-2xl bg-purple-500 rounded-lg hover:bg-purple-800 p-4"
        onClick={handleGPTSearch}
      >
        {lang[langKey].search}
      </button>
      {error && (
        <div className="text-red-600 mt-2 text-xl">
          {showFullError ? error : getFirstSentence(error)}
          {error.includes(".") 
          }
        </div>
      )}
    </div>
  );
};

export default GPTSeachbar;
