const express = require("express");
const {
  registerUser,
  authUser,
  updateUser,
  getAllAppliedUsers,
} = require("../controllers/userControllers");
const { protect } = require("../models/middlewares/authMiddleware");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router.route("/update").post(protect, updateUser);
router.route("/getallusers").post(protect, getAllAppliedUsers);

module.exports = router;
