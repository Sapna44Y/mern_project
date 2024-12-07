const express = require("express");
const createUser = require("../Controllers/createUser");
const getAllUsers = require("../Controllers/getallUser");
const router = express.Router();

router.post("/create", createUser);
router.get("/get", getAllUsers);

module.exports = router;
