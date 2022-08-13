const express = require("express");
const router = express.Router();

const alamatHandler = require("./handler/alamat");
const verifyToken = require("../middleware/verifyToken");

router.post("/", alamatHandler.create);
router.put("/:id", alamatHandler.update);
router.get("/:id", alamatHandler.getAlamat);
router.get("/", alamatHandler.getAlamat);
router.delete("/delete/:id", alamatHandler.destroy);



module.exports = router;
