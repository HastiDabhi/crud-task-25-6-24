const  express = require("express")
const { about_Controller } = require("../../controller")

const router = express.Router()


router.post(
     "/create-about",
     about_Controller.create_about
     //callback => controller

)


router.get(
    "/list",
    about_Controller.get_about
    //callback => contrtoller
)


router.delete(
    "/delete/:id",
    about_Controller.delete_about

    //call back
)

router.put(
    "/update-about/:about_id",
    about_Controller.update_about
)


module.exports = router