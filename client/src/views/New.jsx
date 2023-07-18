import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

const New = () => {
  const navigator = useNavigate();

  const [movieData, setMovieData] = useState({
    title: "",
    description: "",
    genre: "",
    year: "",
    poster: "",
  });

  const [titleError, setTitleError] = useState('')
  const [descError, setDescError] = useState('')
  const [genreError, setGenreError] = useState('')
  const [yearError, setYearError] = useState('')

  //!BOKEN HERE WHEN TRYING TO ADD A NEW MOVIE USING THE NEW PAGE*
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/movies", movieData)

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

  const handleChange = (e) => {
    const { value, name } = e.target;
    setMovieData((currentData) => ({ ...currentData, [name]: value }));
  };

  //! May need to update form below...
  return (
    <div className="movieContainer">
      <div className="movieCard">
        <h3 className='movieTitle'>Add a Movie!</h3>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <p className='err'>{titleError}</p>
          <input
            onChange={handleChange}
            value={movieData.title}
            name="title"
            type="text"
          />

          <br />

          <label>Description</label>
          <p className='err'>{descError}</p>
          <input
            onChange={handleChange}
            value={movieData.description}
            name="description"
            type="text"
          />
          <br />

          <label>Genre</label>
          <p className='err'>{genreError}</p>
          <input
            onChange={handleChange}
            value={movieData.genre}
            name="genre"
            type="text"
          />
          <br />

          <label>Year</label>
          <p className='err'>{yearError}</p>
          <input
            onChange={handleChange}
            value={movieData.year}
            name="year"
            type="text"
          />
          <br />

          <label>Poster</label>
          {/* <p className='err'>TEST ERROR</p> */}

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
};

export default New;
