const express = require("express");
const router = express.Router();
const transaksiHandler = require("./handler/transaksi");

router.get('/', transaksiHandler.getAll);
router.get('/:id', transaksiHandler.getSingle);
router.post('/', transaksiHandler.create);
router.put('/:id', transaksiHandler.update);
router.delete('/:id', transaksiHandler.destroy);

module.exports = router;
