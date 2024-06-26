const  express = require("express")
const { abc_Controller } = require("../../controller")

const router = express.Router()


router.post(
     "/create-abc",
     abc_Controller.create_abc
     //callback => controller

)


router.get(
    "/list",
    abc_Controller.get_abc
    //callback => contrtoller
)


router.delete(
    "/delete/:id",
    abc_Controller.delete_abc

    //call back
)

router.put(
    "/update-abc/:abc_id",
    abc_Controller.update_abc
)


module.exports = router