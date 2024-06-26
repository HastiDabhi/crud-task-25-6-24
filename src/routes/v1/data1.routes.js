const express = require("express")
const { data1_Controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-data1",
    data1_Controller.create_data1
)

router.get(
    "/list",
    data1_Controller.get_data1
)

router.delete(
    "/delete/:id",
    data1_Controller.delete_data1
)

router.put(
    "/update-data/:data_id",
    data1_Controller.update_data1
)


module.exports = router