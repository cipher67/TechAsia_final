var express = require('express');
var router = express.Router();
var db = require('../db');
const Chart = require('chart.js');
const {setSessionEmail, getSessionEmail} = require('./sessionHandler')
const { setDate, getDate } = require("./current-dateHandler");
const {admin_requireLogin} = require("./admin-middleware")

router.post('/', async function (req, res, next) {
  res.redirect(`/admin-graph?email=${getSessionEmail()}`);
});



module.exports = router;