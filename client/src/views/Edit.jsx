import React, { useState, useEffect } from "react";

import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";




const Edit = () => {

  const {id} = useParams(); 

  const navigator = useNavigate();

  const [movieData, setMovieData] = useState({
    title: "",
    description: "",
    genre: "",
    year: "",
    poster: "",
  });

  //setting up errors for specific field
  const [titleError, setTitleError] = useState('')
  const [descError, setDescError] = useState('')
  const [genreError, setGenreError] = useState('')
  const [yearError, setYearError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    //switch to PUT for edit/update page
    axios
      .put(`http://localhost:8080/api/movies/${id}`, movieData)

      .then((res) => navigator(`/`))

      // .catch((err) => console.log(err));
      .catch(err=>{
        const errs = err.response.data.errors

        if (errs.title) {
          setTitleError(errs.title.message)
        } else {
          setTitleError('')
        }
        
        if (errs.description) {
          setDescError(errs.description.message)
        } else {
          setDescError('')
        }

        if (errs.genre) {
          setGenreError(errs.genre.message)
        } else {
          setGenreError('')
        }

        if (errs.year) {
          setYearError(errs.year.message)
        } else {
          setYearError('')
        }

      })
  };

//Setting up the pre-populating fields*
  const fetchMovie= () => {
    axios.get(`http://localhost:8080/api/movies/${id}`)
    .then(res=> setMovieData(res.data))

    .catch(err=>console.log(err))
  }

  useEffect(fetchMovie, [])

  const handleChange = (e) => {
    const { value, name } = e.target;
    setMovieData((current) => ({ ...current, [name]: value }));
  };

  return (
    <div className="movieContainer">
      <div className="movieCard">
        <h3 className='movieTitle'>Edit Movie...</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Title</label>
          <p className='err'>{titleError}</p>
          <input
            onChange={handleChange}
            value={movieData.title}
            name="title"
            type="text"
          />

          <br />

          <label htmlFor="">Description</label>
          <p className='err'>{descError}</p>
          <input
            onChange={handleChange}
            value={movieData.description}
            name="description"
            type="text"
          />
          <br />

          <label htmlFor="">Genre</label>
          <p className='err'>{genreError}</p>
          <input
            onChange={handleChange}
            value={movieData.genre}
            name="genre"
            type="text"
          />
          <br />

          <label htmlFor="">Year</label>
          <p className='err'>{yearError}</p>
          <input
            onChange={handleChange}
            value={movieData.year}
            name="year"
            type="text"
          />
          <br />

          <label>Poster</label>
          <input
            onChange={handleChange}
            value={movieData.poster}
            name="poster"
            type="text"
          />
          <br />

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Edit