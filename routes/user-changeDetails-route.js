var express = require('express');
var router = express.Router();
var db = require('../db');
const { setSessionEmail, getSessionEmail } = require('./sessionHandler.js');
const { requireLogin } = require("./middleware")
const bcrypt = require('bcryptjs')


router.get('/',requireLogin, async function (req, res, next) {
  res.render('D:/TechAsia11/views/user-changeDetails');
});

router.post('/', async function (req, res, next) {

  if (req.query.name != '' && req.query.phone != '' && req.query.email != '' && req.query.newPassword != '' && req.query.repeatPassword != '') {
    if (req.query.newPassword == req.query.repeatPassword) {
      console.log("Hullooooooooooooooooooooooo")
      const salt = await bcrypt.genSaltSync(10);
      const secPass = bcrypt.hashSync(`${req.query.newPassword}`, salt)
      db.query(`UPDATE registration SET name='${req.query.name}', phone='${req.query.phone}', email='${req.query.email}',password = '${secPass}' WHERE email='${getSessionEmail()}';`)
      setSessionEmail(req.query.email)
    }
    else {
      console.log('seddddddddddddddddddd')
      res.render('D:/TechAsia11/views/user-changeDetails');
    }

  }



  else if (req.query.name == '' && req.query.phone != '' && req.query.email != '' && req.query.newPassword != '' && req.query.repeatPassword != '') {

    if (req.query.newPassword == req.query.repeatPassword) {
      console.log("Hullooooooooooooooooooooooo")

      const salt = await bcrypt.genSaltSync(10);
      const secPass = bcrypt.hashSync(`${req.query.newPassword}`, salt)
      db.query(`UPDATE registration SET phone='${req.query.phone}', email='${req.query.email}',password = '${secPass}' WHERE email='${getSessionEmail()}';`)
      setSessionEmail(req.query.email)

    }
    else {
      console.log('seddddddddddddddddddd')
      res.render('D:/TechAsia11/views/user-changeDetails');
    }
  }
  else if (req.query.name != '' && req.query.phone == '' && req.query.email != '' && req.query.newPassword != '' && req.query.repeatPassword != '') {
    if (req.query.newPassword == req.query.repeatPassword) {
      console.log("Hullooooooooooooooooooooooo")
      const salt = await bcrypt.genSaltSync(10);
      const secPass = bcrypt.hashSync(`${req.query.newPassword}`, salt)
      db.query(`UPDATE registration SET name='${req.query.name}', email='${req.query.email}',password = '${secPass}' WHERE email='${getSessionEmail()}';`)
      setSessionEmail(req.query.email)

    }
    else {
      console.log('seddddddddddddddddddd')
      res.render('D:/TechAsia11/views/user-changeDetails');
    }
  }
  else if (req.query.name != '' && req.query.phone != '' && req.query.email == '' && req.query.newPassword != '' && req.query.repeatPassword != '') {
    if (req.query.newPassword == req.query.repeatPassword) {
      console.log("Hullooooooooooooooooooooooo")
      const salt = await bcrypt.genSaltSync(10);
      const secPass = bcrypt.hashSync(`${req.query.newPassword}`, salt)
      db.query(`UPDATE registration SET name='${req.query.name}', phone='${req.query.phone}',password = '${secPass}' WHERE email='${getSessionEmail()}';`)

    }
    else {
      console.log('seddddddddddddddddddd')
      res.render('D:/TechAsia11/views/user-changeDetails');
    }
  }
  else if (req.query.name != '' && req.query.phone != '' && req.query.email != '' && req.query.newPassword == '') {
    console.log("Hullooooooooooooooooooooooo")
    db.query(`UPDATE registration SET name='${req.query.name}', phone='${req.query.phone}', email='${req.query.email}' WHERE email='${getSessionEmail()}';`)
    setSessionEmail(req.query.email)

  }
  else if (req.query.name == '' && req.query.phone == '' && req.query.email != '' && req.query.newPassword != '' && req.query.repeatPassword != '') {
    if (req.query.newPassword == req.query.repeatPassword) {
      console.log("Hullooooooooooooooooooooooo")
      const salt = await bcrypt.genSaltSync(10);
      const secPass = bcrypt.hashSync(`${req.query.newPassword}`, salt)
      db.query(`UPDATE registration SET email='${req.query.email}',password = '${secPass}' WHERE email='${getSessionEmail()}';`)
      setSessionEmail(req.query.email)

    }
    else {
      console.log('seddddddddddddddddddd')
      res.render('D:/TechAsia11/views/user-changeDetails');
    }
  }
  else if (req.query.name == '' && req.query.phone != '' && req.query.email == '' && req.query.newPassword != '' && req.query.repeatPassword != '') {
    if (req.query.newPassword == req.query.repeatPassword) {
      console.log("Hullooooooooooooooooooooooo")
      const salt = await bcrypt.genSaltSync(10);
      const secPass = bcrypt.hashSync(`${req.query.newPassword}`, salt)
      db.query(`UPDATE registration SET phone='${req.query.phone}',password = '${secPass}' WHERE email='${getSessionEmail()}';`)

    }
    else {
      console.log('seddddddddddddddddddd')
      res.render('D:/TechAsia11/views/user-changeDetails');
    }
  }
  else if (req.query.name == '' && req.query.phone != '' && req.query.email != '' && req.query.newPassword == '') {
    console.log("Hullooooooooooooooooooooooo")
    db.query(`UPDATE registration SET phone='${req.query.phone}', email='${req.query.email}' WHERE email='${getSessionEmail()}';`)
    setSessionEmail(req.query.email)

  }
  else if (req.query.name != '' && req.query.phone == '' && req.query.email == '' && req.query.newPassword != '' && req.query.repeatPassword != '') {
    if (req.query.newPassword == req.query.repeatPassword) {
      console.log("Hullooooooooooooooooooooooo")
      const salt = await bcrypt.genSaltSync(10);
      const secPass = bcrypt.hashSync(`${req.query.newPassword}`, salt)
      db.query(`UPDATE registration SET name='${req.query.name}',password = '${secPass}' WHERE email='${getSessionEmail()}';`)

    }
    else {
      console.log('seddddddddddddddddddd')
      res.render('D:/TechAsia11/views/user-changeDetails');
    }
  }
  else if (req.query.name != '' && req.query.phone == '' && req.query.email != '' && req.query.newPassword == '') {
    console.log("Hullooooooooooooooooooooooo")
    db.query(`UPDATE registration SET name='${req.query.name}', email='${req.query.email}' WHERE email='${getSessionEmail()}';`)
    setSessionEmail(req.query.email)

  }
  else if (req.query.name != '' && req.query.phone != '' && req.query.email == '' && req.query.newPassword == '') {
    console.log("Hullooooooooooooooooooooooo")
    db.query(`UPDATE registration SET name='${req.query.name}', phone='${req.query.phone}';`)

  }
  else if (req.query.name == '' && req.query.phone == '' && req.query.email == '' && req.query.newPassword != '' && req.query.repeatPassword != '') {
    if (req.query.newPassword == req.query.repeatPassword) {
      console.log("Hullooooooooooooooooooooooo")
      const salt = await bcrypt.genSaltSync(10);
      const secPass = bcrypt.hashSync(`${req.query.newPassword}`, salt)
      db.query(`UPDATE registration SET password = '${secPass}' WHERE email='${getSessionEmail()}';`)

    }
    else {
      console.log('seddddddddddddddddddd')
      res.render('D:/TechAsia11/views/user-changeDetails');
    }

  }

  else if (req.query.name == '' && req.query.phone == '' && req.query.email != '' && req.query.newPassword == '') {
    console.log("Hullooooooooooooooooooooooo")

    db.query(`UPDATE registration SET email='${req.query.email}' WHERE email='${getSessionEmail()}';`)
  }

  else if (req.query.name == '' && req.query.phone != '' && req.query.email == '' && req.query.newPassword == '') {
    console.log("Hullooooooooooooooooooooooo")

    db.query(`UPDATE registration SET phone='${req.query.phone}' WHERE email='${getSessionEmail()}';`)
  }

  else if (req.query.name != '' && req.query.phone == '' && req.query.email == '' && req.query.newPassword == '') {
    console.log("Hullooooooooooooooooooooooo")

    db.query(`UPDATE registration SET name='${req.query.name}' WHERE email='${getSessionEmail()}';`)
  }
  else {
    console.log('seddddddddddddddddddd')
    res.render('D:/TechAsia11/views/user-changeDetails');
  }
});



module.exports = router;