var express = require('express');
var router = express.Router();
var fs = require('fs').promises;

router.get('/:username', async function(req, res, next) {
  const fileData = await fs.readFile(`${process.cwd()}/roster.txt`, 'utf8');
  const lines = fileData.split('\n');
  const match = lines.find(line => line.split('*')[1] === req.params.username);
  if(match){
    const [name, username, school, grade] = match.split('*');
    const [firstName, lastName] = name.split(' ');
    res.send({
      firstName,
      lastName,
      username,
      school,
      grade
    })
  }else{
    res.status(404).send();
  }
});

router.get('/:username/contact', async function(req, res, next) {
  const fileData = await fs.readFile(`${process.cwd()}/studentContact.txt`, 'utf8');
  const lines = fileData.split('\n');
  const match = lines.find(line => line.split('*')[0] === req.params.username);
  if(match){
    const [_username, email, phoneNumber] = match.split('*');
    res.send({
      email,
      phoneNumber
    })
  }else{
    res.status(404).send();
  }
});

module.exports = router;
