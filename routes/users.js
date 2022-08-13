const express = require("express");
const router = express.Router();

const usersHandler = require("./handler/users");
const verifyToken = require("../middleware/verifyToken");

router.post("/register", usersHandler.register);
router.post("/login", usersHandler.login);
router.put("/",verifyToken, usersHandler.update);
router.put("/:id",verifyToken, usersHandler.updateOther);
router.get("/",verifyToken, usersHandler.getUser);
router.get("/:id",verifyToken, usersHandler.getSingle);
router.get("/get/all",verifyToken, usersHandler.getAllUsers);
router.post("/logout",verifyToken, usersHandler.logout);
router.post("/delete/:id", verifyToken , usersHandler.destroy);

module.exports = router;
