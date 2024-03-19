var express = require('express');
var router = express.Router();
var db = require('../db');
const { getSessionEmail } = require('./sessionHandler.js');


router.get('/', async function (req, res, next) { 
  console.log("Heyy")
    const result = await db.query(
      `SELECT DISTINCT statistics.mac_id FROM registration INNER JOIN statistics ON registration.phone = statistics.phone1 WHERE registration.email='${getSessionEmail()}';
      `
    );
    res.render('D:/TechAsia11/views/mydevices.ejs', { users: result });
  

});
module.exports = router;


