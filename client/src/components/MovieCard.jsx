import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

//use moviecard to display the info from dashboard*

const MovieCard = props => {

const navigoat = useNavigate()


//switching from fetchMovies to describe that it tells what to do when something happens to a movie
    const {mov, onDelete} = props
    // const {mov, fetchMovies} = props

const handleDelete = () => {
  // alert(mov.id)
  axios.delete(`http://localhost:8080/api/movies/${mov._id}`)
  .then(()=>onDelete())
  .catch(err=>{console.log(err)})
}

  return (
    <div className="movieCard">
        
        <Link to={`/movie/${mov._id}`}><h3 className="movieTitle">{mov.title} - ({mov.year})</h3></Link>
        <img src={mov.poster} alt="poster image for the movie" />
        <p className='movDesc'>{mov.description}</p>
        <p className='movDesc'>Genre: {mov.genre}</p>
        <button onClick={()=>{navigoat(`/edit/${mov._id}`)}}>Update</button>
        <button onClick={handleDelete}>Delete</button>

    </div>
  )
}

export default MovieCard