var express = require('express');
const app = express();
var router = express.Router();
var db = require('../db');
// const bcrypt = require('bcryptjs')
const { setSessionEmail } = require('./sessionHandler.js');


// router.get('/', function (req, res, next) {
//   res.render('D:/TechAsia11/views/login.ejs')
// });
router.post('/', async function (req, res, next) {
  const result = await db.query(
    // `SELECT * FROM registration WHERE email='${req.query.email}';`
    // `UPDATE registration SET mac_id='${req.query.macid}' WHERE email='${req.query.email}';`
    `DELETE FROM statistics WHERE mac_id='${req.query.mac_id}';`
  );
  res.json({ message: "Deleted Device" })

});
module.exports = router;
