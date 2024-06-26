const express = require("express")
const { doc_Controller } = require("../../controller")


const router = express.Router()

router.post(
    "/create-doc",
    doc_Controller.create_doc_C
)

router.get(
    "/list",
    doc_Controller.get_doc_C
)

router.delete(
    "/delete/:id",
    doc_Controller.delete_doc
)

router.put(
    "/update-doc/:doc_id",
    doc_Controller.update_doc
)

module.exports = router