const express = require("express");
const router = express.Router();
const penggunaHandler = require("./handler/pengguna");

router.get("/:id", penggunaHandler.getPengguna);
router.put("/:id", penggunaHandler.update);
router.post("/", penggunaHandler.create);
router.get("/", penggunaHandler.getAllPengguna);
router.delete("/delete/:id", penggunaHandler.destroy);

module.exports = router;
