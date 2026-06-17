const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");



// GET ALL USERS
router.get("/", protect, getUsers);



// CREATE USER
router.post("/", protect, createUser);



// UPDATE USER
router.put("/:id", protect, updateUser);



// DELETE USER
router.delete("/:id", protect, deleteUser);

module.exports = router;