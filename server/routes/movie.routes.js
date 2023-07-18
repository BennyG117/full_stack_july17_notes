const movieController = require("../controllers/movie.controller");

//! below is added first to test along with routes.js
const root = require("./routes");

module.exports = (app) => {
  //default test server check
  app.get("/", root);

  //create - post
  app.post("/api/movies", movieController.postCreateMovie);

  //get all - get
  app.get("/api/movies", movieController.getAllMovies);

  //get one - get w/ id
  app.get("/api/movies/:id", movieController.getOneMovie);

  //update - put w/ id
  app.put("/api/movies/:id", movieController.putUpdateMovie);

  //delete - delete w/ id
  app.delete("/api/movies/:id", movieController.deleteMovie);
};
