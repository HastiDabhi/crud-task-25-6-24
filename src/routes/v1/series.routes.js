const express = require("express")
const { series_Controller } = require("../../controller")

const router = express.Router()


router.post(
    "/create-series",
    //call back
    series_Controller.create_series
)

router.get(
    "/list",
    //call back
     series_Controller.get_series
 )

router.delete(
    "/delete/:id",
     //call back

      series_Controller.delete_series

 )

router.post(
    "/check",
    //call back
    series_Controller.check_series

)


module.exports=router