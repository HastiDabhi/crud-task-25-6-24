const express = require("express")
const { object_Controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-object",
     object_Controller.create_object
    )

router.get(
    "/list",
    object_Controller.get_object
)

router.delete(
    "/delete/:id",
    object_Controller.delete_object
)
router.put(
    "/update-object/:object_id",
    object_Controller.update_object
)

module.exports = router