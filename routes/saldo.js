const express = require("express");
const router = express.Router();
const saldoHandler = require("./handler/saldo");

router.post("/", saldoHandler.create);
router.put("/increase/:id", saldoHandler.increase);
router.put("/decrease/:id", saldoHandler.decrease);
router.get("/:id", saldoHandler.getSingle);

module.exports = router;
