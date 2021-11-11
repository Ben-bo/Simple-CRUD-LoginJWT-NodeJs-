const router = require("express").Router();
const multer = require("multer");
const upload = multer();
const userController = require("../controllers/userController");
router.post("/register", upload.none(), userController.register);
router.post("/login", upload.none(), userController.login);

module.exports = router;
