const  express = require("express")
const { readme_Controller } = require("../../controller")

const router = express.Router()


router.post(
     "/create-readme",
     //callback => controller
     readme_Controller.create_readme
)


router.get(
    "/list",
    //callback => contrtoller
    readme_Controller.get_readme
)


router.delete(
    "/delete/:id",

    //call back
    readme_Controller.delete_readme
)

router.put(
    "/update-readme/:readme_id",
    readme_Controller.update_readme
)


module.exports = router