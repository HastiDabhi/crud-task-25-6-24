const  express = require("express")
const { def_Controller } = require("../../controller")

const router = express.Router()


router.post(
     "/create-def",
     def_Controller.create_def
     //callback => controller

)


router.get(
    "/list",
    def_Controller.get_def
    //callback => contrtoller
)


router.delete(
    "/delete/:id",
    def_Controller.delete_def

    //call back
)

router.put(
    "/update-def/:def_id",
    def_Controller.update_def
)


module.exports = router