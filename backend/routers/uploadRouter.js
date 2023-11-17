const express = require("express");
const uploadController = require("../controllers/uploadController.js");

const router = express.Router();

router.route("/").post(uploadController);

module.exports = router;
