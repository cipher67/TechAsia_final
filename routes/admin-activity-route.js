var express = require('express');
var router = express.Router();
var db = require('../db');
const { admin_requireLogin } = require('./admin-middleware')

router.get('/', admin_requireLogin, async function (req, res, next) {
  const result = await db.query(
    `SELECT registration.name, statistics.count, statistics.session_time, statistics.mac_id, statistics.time, statistics.date 
     FROM statistics 
     INNER JOIN registration ON registration.phone = statistics.phone1;`
  );
  
  // const result = await db.query(
  //   `SELECT * FROM statistics inner join registration on registration.phone = statistics.phone1;`
  // );
  res.render('D:/TechAsia11/views/admin-activity.ejs', { users: result });
});
module.exports = router;

