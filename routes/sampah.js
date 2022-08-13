const express = require("express");
const router = express.Router();
const sampahHandler = require("./handler/sampah");

router.get("/", sampahHandler.getAllSampah);
router.get("/:id", sampahHandler.getSampah);
router.post("/", sampahHandler.create);
router.put("/:id", sampahHandler.update);
router.delete("/:id", sampahHandler.destroy);


module.exports = router;
