var express = require('express');
// const app = express();
var router = express.Router();
var db = require('../db');
const bcrypt = require('bcryptjs')
const { setSessionEmail, getSessionEmail } = require('./sessionHandler.js');

var email = ''
router.get('/', function (req, res, next) {
  // if( getSessionEmail() ) {
  //   res.redirect('/user-profile')
  // }
  res.render('D:/TechAsia11/views/login.ejs', { alert: false })
});
router.post('/', async function (req, res, next) {
  // console.log(req.query)
  const result = await db.query(
    `SELECT * FROM registration WHERE email='${req.query.email}';`
  );
  // console.log(result)

  if (result.length === 0) {
    console.log(result)
    console.log("User not found.")
    // res.render('D:/TechAsia11/views/login.ejs', { alert: true })
    res.send('success')
  }
  else {
    const user = result[0];
    const passwordCompare = await bcrypt.compare(`${req.query.password}`, user.password);
    console.log(user);
    // console.log("User found")
    // console.log(passwordCompare)
    if (passwordCompare) {
      console.log("Logged in.");
      email = req.query.email;
      req.session.email = email;
      req.session.authorized = true;
      setSessionEmail(email);
      // console.log("req.session.email:", req.session.email);
      console.log(getSessionEmail()) // Check the value
      // res.render('D:/TechAsia11/views/user-profile.ejs');
      // res.data = 'success'
      res.send('success');
      // return 'success';
      // res.send('<script>window.location.href="/user-profile";</script>');

    }
    else {
      console.log("Login fail.");
      // res.render('D:/TechAsia11/views/login.ejs', { alert: true })
      res.send('success')
    }


  }

});
module.exports = router;
