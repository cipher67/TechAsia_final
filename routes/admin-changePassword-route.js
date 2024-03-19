var express = require('express');
var router = express.Router();
var db = require('../db');
const { setSessionUsername, getSessionUsername } = require('./admin-sessionHandler.js');
const { admin_requireLogin } = require("./admin-middleware")
const bcrypt = require('bcryptjs')


router.get('/', admin_requireLogin, async function (req, res, next) {
  res.render('D:/TechAsia11/views/admin-changePassword.ejs');
});

router.post('/', async function (req, res, next) {

  if (req.query.name != '' && req.query.phone != '' && req.query.email != '' && req.query.newPassword != '' && req.query.repeatPassword != '') {
    if (req.query.newPassword == req.query.repeatPassword) {
      console.log("Hullooooooooooooooooooooooo")
      const salt = await bcrypt.genSaltSync(10);
      const secPass = bcrypt.hashSync(`${req.query.newPassword}`, salt)
      db.query(`UPDATE admin SET name='${req.query.name}', phone='${req.query.phone}', email='${req.query.email}',password = '${secPass}' WHERE username='${getSessionUsername()}';`)
    }
    else {
      console.log('seddddddddddddddddddd')
      res.render('D:/TechAsia11/views/admin-changePassword.ejs');
    }

  }



  else if (req.query.name == '' && req.query.phone != '' && req.query.email != '' && req.query.newPassword != '' && req.query.repeatPassword != '') {

    if (req.query.newPassword == req.query.repeatPassword) {
      console.log("Hullooooooooooooooooooooooo")

      const salt = await bcrypt.genSaltSync(10);
      const secPass = bcrypt.hashSync(`${req.query.newPassword}`, salt)
      db.query(`UPDATE admin SET phone='${req.query.phone}', email='${req.query.email}',password = '${secPass}' WHERE username='${getSessionUsername()}';`)
    }
    else {
      console.log('seddddddddddddddddddd')
      res.render('D:/TechAsia11/views/admin-changePassword.ejs');
    }
  }
  else if (req.query.name != '' && req.query.phone == '' && req.query.email != '' && req.query.newPassword != '' && req.query.repeatPassword != '') {
    if (req.query.newPassword == req.query.repeatPassword) {
      console.log("Hullooooooooooooooooooooooo")
      const salt = await bcrypt.genSaltSync(10);
      const secPass = bcrypt.hashSync(`${req.query.newPassword}`, salt)
      db.query(`UPDATE admin SET name='${req.query.name}', email='${req.query.email}',password = '${secPass}' WHERE username='${getSessionUsername()}';`)
    }
    else {
      console.log('seddddddddddddddddddd')
      res.render('D:/TechAsia11/views/admin-changePassword.ejs');
    }
  }
  else if (req.query.name != '' && req.query.phone != '' && req.query.email == '' && req.query.newPassword != '' && req.query.repeatPassword != '') {
    if (req.query.newPassword == req.query.repeatPassword) {
      console.log("Hullooooooooooooooooooooooo")
      const salt = await bcrypt.genSaltSync(10);
      const secPass = bcrypt.hashSync(`${req.query.newPassword}`, salt)
      db.query(`UPDATE admin SET name='${req.query.name}', phone='${req.query.phone}',password = '${secPass}' WHERE username='${getSessionUsername()}';`)
    }
    else {
      console.log('seddddddddddddddddddd')
      res.render('D:/TechAsia11/views/admin-changePassword.ejs');
    }
  }
  else if (req.query.name != '' && req.query.phone != '' && req.query.email != '' && req.query.newPassword == '') {
    console.log("Hullooooooooooooooooooooooo")
    db.query(`UPDATE admin SET name='${req.query.name}', phone='${req.query.phone}', email='${req.query.email}' WHERE username='${getSessionUsername()}';`)
  }
  else if (req.query.name == '' && req.query.phone == '' && req.query.email != '' && req.query.newPassword != '' && req.query.repeatPassword != '') {
    if (req.query.newPassword == req.query.repeatPassword) {
      console.log("Hullooooooooooooooooooooooo")
      const salt = await bcrypt.genSaltSync(10);
      const secPass = bcrypt.hashSync(`${req.query.newPassword}`, salt)
      db.query(`UPDATE admin SET email='${req.query.email}',password = '${secPass}' WHERE username='${getSessionUsername()}';`)
    }
    else {
      console.log('seddddddddddddddddddd')
      res.render('D:/TechAsia11/views/admin-changePassword.ejs');
    }
  }
  else if (req.query.name == '' && req.query.phone != '' && req.query.email == '' && req.query.newPassword != '' && req.query.repeatPassword != '') {
    if (req.query.newPassword == req.query.repeatPassword) {
      console.log("Hullooooooooooooooooooooooo")
      const salt = await bcrypt.genSaltSync(10);
      const secPass = bcrypt.hashSync(`${req.query.newPassword}`, salt)
      db.query(`UPDATE admin SET phone='${req.query.phone}',password = '${secPass}' WHERE username='${getSessionUsername()}';`)
    }
    else {
      console.log('seddddddddddddddddddd')
      res.render('D:/TechAsia11/views/admin-changePassword.ejs');
    }
  }
  else if (req.query.name == '' && req.query.phone != '' && req.query.email != '' && req.query.newPassword == '') {
    console.log("Hullooooooooooooooooooooooo")
    db.query(`UPDATE admin SET phone='${req.query.phone}', email='${req.query.email}' WHERE username='${getSessionUsername()}';`)
  }
  else if (req.query.name != '' && req.query.phone == '' && req.query.email == '' && req.query.newPassword != '' && req.query.repeatPassword != '') {
    if (req.query.newPassword == req.query.repeatPassword) {
      console.log("Hullooooooooooooooooooooooo")
      const salt = await bcrypt.genSaltSync(10);
      const secPass = bcrypt.hashSync(`${req.query.newPassword}`, salt)
      db.query(`UPDATE admin SET name='${req.query.name}',password = '${secPass}' WHERE username='${getSessionUsername()}';`)
    }
    else {
      console.log('seddddddddddddddddddd')
      res.render('D:/TechAsia11/views/admin-changePassword.ejs');
    }
  }
  else if (req.query.name != '' && req.query.phone == '' && req.query.email != '' && req.query.newPassword == '') {
    console.log("Hullooooooooooooooooooooooo")
    db.query(`UPDATE admin SET name='${req.query.name}', email='${req.query.email}' WHERE username='${getSessionUsername()}';`)
  }
  else if (req.query.name != '' && req.query.phone != '' && req.query.email == '' && req.query.newPassword == '') {
    console.log("Hullooooooooooooooooooooooo")
    db.query(`UPDATE admin SET name='${req.query.name}', phone='${req.query.phone}';`)
  }
  else if (req.query.name == '' && req.query.phone == '' && req.query.email == '' && req.query.newPassword != '' && req.query.repeatPassword != '') {
    if (req.query.newPassword == req.query.repeatPassword) {
      console.log("Hullooooooooooooooooooooooo")
      const salt = await bcrypt.genSaltSync(10);
      const secPass = bcrypt.hashSync(`${req.query.newPassword}`, salt)
      db.query(`UPDATE admin SET password = '${secPass}' WHERE username='${getSessionUsername()}';`)
    }
    else {
      console.log('seddddddddddddddddddd')
      res.render('D:/TechAsia11/views/admin-changePassword.ejs');
    }

  }

  else if (req.query.name == '' && req.query.phone == '' && req.query.email != '' && req.query.newPassword == '') {
    console.log("Hullooooooooooooooooooooooo")

    db.query(`UPDATE admin SET email='${req.query.email}' WHERE username='${getSessionUsername()}';`)
  }

  else if (req.query.name == '' && req.query.phone != '' && req.query.email == '' && req.query.newPassword == '') {
    console.log("Hullooooooooooooooooooooooo")

    db.query(`UPDATE admin SET phone='${req.query.phone}' WHERE username='${getSessionUsername()}';`)
  }

  else if (req.query.name != '' && req.query.phone == '' && req.query.email == '' && req.query.newPassword == '') {
    console.log("Hullooooooooooooooooooooooo")

    db.query(`UPDATE admin SET name='${req.query.name}' WHERE username='${getSessionUsername()}';`)
  }
  else {
    console.log('seddddddddddddddddddd')
    res.render('D:/TechAsia11/views/admin-changePassword.ejs');
  }
});



module.exports = router;