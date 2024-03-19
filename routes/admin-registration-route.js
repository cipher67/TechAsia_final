var express = require('express');
// var path = require()
var router = express.Router();
var db = require('../db');
const bcrypt = require('bcryptjs')

router.get('/', async function (req, res, next) {
    res.render('D:/TechAsia11/views/admin-registration.ejs')

});

router.post('/', async function (req, res, next) {
  const salt = await bcrypt.genSaltSync(10);
  const secPass = bcrypt.hashSync(`${req.query.password}`, salt)
  const result = await db.query(
    `INSERT INTO admin 
        (name, email, phone, username, password) 
        VALUES 
        ('${req.query.name}','${req.query.email}', '${req.query.phone}','${req.query.username}', '${secPass}');`
  );

  let message = 'Error in creating the user';

  if (result.affectedRows) {
    message = 'User created successfully';
    console.log({ message: message })
  }
});
module.exports = router;

