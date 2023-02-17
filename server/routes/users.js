const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController.js");
const authController = require("../controllers/authController.js");

router.get("/api/notes", userController.getNote);
router.get("/api/notes/:id", userController.GetEndpoint);
router.post("/api/notes", userController.postNote);
router.put("/api/notes/:id", userController.putNote);
router.delete("/api/notes/:id", userController.deleteNote);

router.post("/api/users/signup", authController.createUser);
router.post("/api/users/login", authController.loginUser);

module.exports = router;
