const express = require("express")
const { strim_Controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-strim",
    strim_Controller.create_strim
)

router.get(
    "/list",
    strim_Controller.get_strim
)

router.delete(
    "/delete/:id",
    strim_Controller.delete_strim
    
)

router.put(
    "/update-strim/:strim_id",
    strim_Controller.update_strim
)

module.exports = router