const express = require("express")
const { data_Controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-data",
    data_Controller.create_data
)

router.get(
    "/list",
    data_Controller.get_data
)

router.delete(
    "/delete/:id",
    data_Controller.delete_data
)

router.put(
    "/update-data/:data_id",
    data_Controller.update_data
)


module.exports = router