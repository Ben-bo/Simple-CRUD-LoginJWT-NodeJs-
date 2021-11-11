const router = require("express").Router();
const multer = require("multer");
const upload = multer();
const mhsController = require("../controllers/mhscontroller");
router.get("/mhs", mhsController.getAll);
router.post("/mhs", upload.none(), mhsController.create);
module.exports = router;
