var express = require('express');
const app = express();
var router = express.Router();
var db = require('../db');
const bcrypt = require('bcryptjs')
const { setSessionEmail } = require('./sessionHandler.js');



router.get('/', function (req, res, next) {
  res.render('D:/TechAsia11/views/reset-password.ejs')
});

router.post('/', async function (req, res, next) {
  const result = await db.query(
    `SELECT * FROM registration WHERE email='${req.query.email}';`
  );



});
module.exports = router;
