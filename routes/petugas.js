const express = require("express");
const router = express.Router();
const petugasHandler = require("./handler/petugas");

router.get("/:id", petugasHandler.getPetugas);
router.put("/:id", petugasHandler.update);
router.post("/", petugasHandler.create);
router.get("/", petugasHandler.getAllpetugas);
router.delete("/delete/:id", petugasHandler.destroy);

module.exports = router;
