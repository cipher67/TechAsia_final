var express = require('express');
var router = express.Router();
var db = require('../db');
const {admin_requireLogin} = require('./admin-middleware')


router.get('/', admin_requireLogin, async function (req, res, next) { 
  console.log("Heyy")
    const result = await db.query(
      `SELECT * FROM registration;`
    );
    res.render('D:/TechAsia11/views/admin-dashboard.ejs', { users: result });
  

});
module.exports = router;


