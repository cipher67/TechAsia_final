var express = require('express');
var router = express.Router();
const { setDate, getDate } = require("./current-dateHandler");

router.get('/', async function (req, res, next) {
  setDate(req.query.newDate)
  res.redirect('/graph')
  console.log('redirected')
});
module.exports = router;