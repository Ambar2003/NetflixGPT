import React from "react";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useState } from "react";
const VideoBackground = ({ movieId }) => {
  const [trailerID, setTrailerID] = useState(null);
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    const movieResults = json.results;
    const filteredResults = movieResults.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredResults.length ? filteredResults[0] : movieResults;
    setTrailerID(trailer.key);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <div>
      <iframe className="w-[99vw] aspect-video"
        src={"https://www.youtube.com/embed/" + trailerID + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
