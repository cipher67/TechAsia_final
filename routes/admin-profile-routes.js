var express = require('express');
var router = express.Router();
var db = require('../db');
const {admin_requireLogin}=require("./admin-middleware")
const {getSessionUsername} = require("./admin-sessionHandler")

router.get('/', admin_requireLogin, async function (req, res, next) {  
  const result = await db.query(
      `SELECT * FROM admin WHERE username='${getSessionUsername()}';`
    );
    res.render('D:/TechAsia11/views/admin-profile.ejs', { users: result });
  });
  module.exports = router;
