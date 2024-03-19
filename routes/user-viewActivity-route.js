var express = require('express');
var router = express.Router();
var db = require('../db');
const { getSessionEmail } = require('./sessionHandler.js');
const { requireLogin } = require('./middleware')
const {setSessionMac, getSessionMac} = require('./macHandler')

router.get('/', requireLogin, async function (req, res, next) {
  setSessionMac(req.query.mac_id)
  const result = await db.query(
    `SELECT * FROM statistics WHERE mac_id='${req.query.mac_id}';`
  );
  res.render('D:/TechAsia11/views/user-viewActivity.ejs', { users: result });
});
router.post('/',requireLogin, async function(req, res, next){
    res.redirect(`/user-viewActivity?mac_id=${req.query.mac_id}`)
})
module.exports = router;