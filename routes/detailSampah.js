const express = require("express");
const router = express.Router();
const detailSampahHandler = require("./handler/detail-sampah");

router.get("/", detailSampahHandler.getAllDetailSampah);
router.get("/petugas/:id", detailSampahHandler.getDetailSampah);
router.post("/", detailSampahHandler.create);
router.put("/:id", detailSampahHandler.update);
router.delete("/:id", detailSampahHandler.destroy);


module.exports = router;
