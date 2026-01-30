const upload = require("../middleware/uploads.middleware")
const ImageController = require("../controllers/image.controllers")
const router = require("express").Router


router.post("/single",upload.single("image"),ImageController.uploadSinger)
router.post("/multiple",upload.array("image"),ImageController.uploadSinger)
router.get("/",ImageController.gatAll)
router.delete("/:id",ImageController.removeImage)

module.exports = router