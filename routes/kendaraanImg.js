const express = require("express");
const router = express.Router();

const kendaraanHandler = require("./handler/kendaraan");
router.post("/", kendaraanHandler.create);
router.get("/", kendaraanHandler.getAll);
router.delete("/:id", kendaraanHandler.destroy);

module.exports = router;
