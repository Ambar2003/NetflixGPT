import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addTrendingMovies } from "../utils/movieSlice";
import { useSelector } from "react-redux";
const useTrendingMovies = () =>{
    const dispatch = useDispatch();
const getTrendingMovies = async () =>{
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?", API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };
  const trendingMovies = useSelector(store => store?.movies?.trendingMovies);
  useEffect(()=>{
    
    !trendingMovies && getTrendingMovies();
  },[]);
};
export default useTrendingMovies;