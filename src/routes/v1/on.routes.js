const  express = require("express")
const { on_Controller } = require("../../controller")

const router = express.Router()


router.post(
     "/create-on",
     on_Controller.create_on
     //callback => controller

)


router.get(
    "/list",
    on_Controller.get_on
    //callback => contrtoller
)


router.delete(
    "/delete/:id",
    on_Controller.delete_on

    //call back
)

router.put(
    "/update-on/:on_id",
    on_Controller.update_on
)


module.exports = router