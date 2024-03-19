var express = require('express');
var router = express.Router();
var db = require('../db');
const bcrypt = require('bcryptjs')

router.get('/', function (req, res, next) {
  res.render('D:/TechAsia11/views/registration.ejs')
});

router.post('/', async function (req, res, next) {
  const salt = await bcrypt.genSaltSync(10);
  const secPass = bcrypt.hashSync(`${req.query.password}`, salt)
  const result = await db.query(
    `INSERT INTO registration 
        (name, email, phone, password) 
        VALUES 
        ('${req.query.name}','${req.query.email}', '${req.query.phone}', '${secPass}')`
  );

  let message = 'Error in creating the user';

  if (result.affectedRows) {
    message = 'User created successfully';
    console.log({ message: message })


  }
});
module.exports = router;

