const  express = require("express")
const { size_Controller } = require("../../controller")

const router = express.Router()


router.post(
     "/create-size",
      size_Controller.create_size
     //callback => controller

)


router.get(
    "/list",
    size_Controller.get_size
    //callback => contrtoller
)


router.delete(
    "/delete/:id",
    size_Controller.delete_size

    //call back
)

router.put(
    "/update-size/:size_id",
    size_Controller.update_size
)


module.exports = router