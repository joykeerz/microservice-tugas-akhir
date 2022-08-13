const express = require("express");
const router = express.Router();
const langgananHandler = require('./handler/langganan') 

router.get('/', langgananHandler.getAll);
router.get('/:id', langgananHandler.getSingle);
router.post('/', langgananHandler.create);
router.put('/:id', langgananHandler.update);
router.delete('/:id', langgananHandler.batal);

module.exports = router;
