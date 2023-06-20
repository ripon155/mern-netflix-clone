const express = require("express");
const authController = require("../controller/authController");

const {
  registration,
  login,
  protectRoute,
  getUserById,
  updateUser,
  deleteUser,
  allUser,
  restricTo,
  userStatus,
} = authController;

const router = express.Router();

router.route("/registration").post(registration);
router.route("/login").post(login);

// latest 10 user
router.route("/").get(restricTo("admin", "superAdmin"), protectRoute, allUser);
router.route("/stats").get(userStatus);
router
  .route("/:id")
  .get(protectRoute, getUserById)
  .patch(protectRoute, updateUser)
  .delete(protectRoute, deleteUser);

module.exports = router;
