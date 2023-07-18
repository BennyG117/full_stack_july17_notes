//one MOVIE
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Movie = () => {
    const navigator = useNavigate
  const [movieData, setMovieData] = useState({});
  const { id } = useParams;

  const getMovieData = () => {
    axios.get(`http://localhost:8080/api/movies/${id}`)
    .then(res=>setMovieData(res.data))
    .catch(err=>console.log(err))

  };

  useEffect(getMovieData, [])
  
const onMovieDelete = () => {
    navigator("/")
}

  return (
  <div className="movieContainer">Movie
  <MovieCard mov={movieData}></MovieCard>
  
  </div>
  
  )
};

export default Movie;
