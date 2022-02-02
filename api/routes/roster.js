var express = require('express');
var router = express.Router();
var fs = require('fs').promises;

/* GET roster */
router.get('/', async function(req, res, next) {
  const fileData = await fs.readFile(`${process.cwd()}/roster.txt`, 'utf8');
  const lines = fileData.split('\n');
  const roster = lines.map((line) => {
    const [name, username, school, grade] = line.split('*');
    const [firstName, lastName] = name.split(' ');

    return {
      firstName,
      lastName,
      username,
      school,
      grade
    }
  })
  res.send(roster);
});

module.exports = router;
