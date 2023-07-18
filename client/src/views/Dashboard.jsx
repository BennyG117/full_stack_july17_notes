import React, {useState, useEffect} from 'react'
import MovieCard from '../components/MovieCard'

import axios from 'axios'

const Dashboard = () => {


    //testing obj
    //   const testMovie = { 
    //     title: "Requiem for a Dream",
    //     year: 2000,
    //     genre: "Drama",
    //     description: "sad movie makes sad feels",
    //     poster: "https://upload.wikimedia.org/wikipedia/en/9/92/Requiem_for_a_dream.jpg"

    // }
    const [movies, setMovies] = useState([])

    const fetchMovies = () => {
      axios.get("http://localhost:8080/api/movies")
      .then(res=>setMovies(res.data))
      .catch(err=> console.log(err))
    }

      useEffect(fetchMovies, [])


//! Broken after changing to testMovie above*

    //Testing multiple movie cards*
  return (
    <div className='movieContainer'>


        {/* <MovieCard mov={movie}/>
        <MovieCard mov={movie}/>
        <MovieCard mov={movie}/>
        <MovieCard mov={movie}/>
        <MovieCard mov={movie}/> */}
{movies.map( (movie, key) => {
  return <MovieCard onDelete={fetchMovies} mov={movie}/>
  
})}

    </div>
  )
}

export default Dashboard