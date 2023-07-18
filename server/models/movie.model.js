const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a Title!"],
    minlength: [1, "Title must be at least 1 character!"],
  },
  year: {
    type: Number,
    required: [true, "Please include a release year!"],
    minlength: [2, "Year must be at least 2 characters!"],
  },
  genre: {
    type: String,
    required: [true, "Please include a genre!"],
    // minlength: [1, "Some amount required!"],

  },
  description: {
    type: String,
    required: [true, "Please include a description!"],
    maxlength: [250, "Staaaahp, too much stuff! Limit is 250 characters"],
  },
  poster: {
    type: String,
    //! required: [true, "Please provide a poster link!"],
    // maxlength: [250, "Staaaahp, too much stuff! Limit is 250 characters"],
  },

}, 
{timestamps:true}

);



const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
