const Movie = require("../models/movie.model");

module.exports = {
  postCreateMovie: (req, res) => {
    Movie.create(req.body)
      .then((newMovie) => {
        res.json(newMovie);
      })
      .catch((err) => {
        //!(ADD) .catch(err=>res.status(400).json(err))
        console.log(err);
        res.status(400).json(err);
      });
  },

  getAllMovies: (req, res) => {
    Movie.find()
      .then((movies) => {
        res.json(movies);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  getOneMovie: (req, res) => {
    Movie.findOne({ _id: req.params.id })
      .then((oneMovie) => {
        res.json(oneMovie);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  //!Validation needed here= new:true, etc...
  putUpdateMovie: (req, res) => {
    Movie.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatingMovie) => {
        res.json(updatingMovie);
      })
      .catch((err) => {
        //!(ADD) .catch(err=>res.status(400).json(err))
        console.log(err);
        res.status(400).json(err)
        // res.status(400).json(err?.errors?.message || err);
      });
  },
  deleteMovie: (req, res) => {
    Movie.deleteOne({ _id: req.params.id })
      .then((deleteMovie) => {
        res.json(deleteMovie);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  }
};
