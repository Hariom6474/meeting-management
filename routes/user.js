const express = require("express");
const controller = require("../controller/main");
const router = express.Router();

router.post("/add-user", controller.postAddUser);

module.exports = router;
