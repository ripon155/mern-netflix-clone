const express = require("express");
const listController = require("../controller/listController");
const authController = require("../controller/authController");
const { protectRoute } = authController;
const { createList, deleteList, getFilter } = listController;

const router = express.Router();

router.route("/").post(protectRoute, createList).get(getFilter);
router.route("/:id").delete(protectRoute, deleteList);

module.exports = router;
