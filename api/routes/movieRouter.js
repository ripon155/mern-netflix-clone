const express = require("express");
const movieController = require("../controller/movieController");
const authController = require("../controller/authController");
const { imageUpload } = require("../utils/videoUpload");

const { protectRoute } = authController;
const {
  getAllMovie,
  createNewMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
  getRandomMovie,
  newAndPopular,
  kids,
} = movieController;

const router = express.Router(getAllMovie);

router.route("/newandpopular").get(newAndPopular);
router.route("/randommovie").get(getRandomMovie);
router.route("/kids").get(kids);

router
  .route("/")
  .get(protectRoute, getAllMovie)
  .post(protectRoute, imageUpload, createNewMovie);

router
  .route("/:id")
  .get(protectRoute, getMovieById)
  .patch(protectRoute, updateMovie)
  .delete(protectRoute, deleteMovie);

module.exports = router;
