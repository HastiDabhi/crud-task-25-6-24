const  express = require("express")
const { admin_Controller } = require("../../controller")

const router = express.Router()


router.post(
     "/create-admin",
     //callback => controller
     admin_Controller.create_admin_C
)


router.get(
    "/list",
    //callback => contrtoller
    admin_Controller.get_admin_C
)


router.delete(
    "/delete/:id",
    admin_Controller.delete_admin

    //call back
)

router.put(
    "/update-admin/:admin_id",
    admin_Controller.update_admin
)


module.exports = router