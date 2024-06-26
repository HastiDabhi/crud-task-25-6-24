const express = require("express")
const { episode_Controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-episode",
    episode_Controller.create_episode_C

)

router.get(
    "/list",
    episode_Controller.create_episode_C
),
router.delete(
    "/delete/:id",
    episode_Controller.delete_episode
)
router.put(
    "/update-episode/:episode_id",
    episode_Controller.update_episode
)

module.exports = router
