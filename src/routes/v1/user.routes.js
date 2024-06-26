const  express = require("express")
const { user_Controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-user",
    user_Controller.create_user_C
)

router.get(
    "/list",
    user_Controller.get_user_C

)

router.delete(
    "/delete/:id",

    user_Controller.delete_user

)

router.put(
    "/update-user/:user_id",
    user_Controller.update_user


)


module.exports = router