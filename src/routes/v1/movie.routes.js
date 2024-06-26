const express = require("express")
const { movie_Controller } = require("../../controller")

const router = express.Router()

router.post(
     "/create-movie",

     //call back || => controller
     movie_Controller.create_movie
)

router.get(
     "/list",

     //call back
)

router.delete(
     "/delete/:id",
     //call back
      movie_Controller.delete_movie
)

router.put(
     "/update-movie/:movie_id",
     //call back
     movie_Controller.update_movie
)

module.exports = router