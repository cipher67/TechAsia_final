var express = require('express');
var router = express.Router();
var db = require('../db');
const { getSessionEmail } = require('./sessionHandler.js');
const { requireLogin } = require('./middleware')
const {setSessionMac, getSessionMac} = require('./macHandler')

router.post('/', async function(req, res, next){
    res.redirect(`/user-viewActivity?mac_id=${getSessionMac()}`)
})
module.exports = router;