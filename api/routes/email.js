var express = require('express');
var router = express.Router();
var fs = require('fs').promises;

/* GET roster */
router.post('/', async function(req, res, next) {
  res.send(true);
});

module.exports = router;
