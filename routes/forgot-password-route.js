var express = require('express');
const app = express();
var router = express.Router();
var db = require('../db');
const bcrypt = require('bcryptjs')
const { setSessionEmail } = require('./sessionHandler.js');
const nodemailer = require('nodemailer');



router.get('/', function (req, res, next) {
  res.render('D:/TechAsia11/views/forgot-password.ejs')
});

// Password reset route
app.post('/password/reset', (req, res, next) => {
  const { identifier } = req.body;

  router.post('/', async function (req, res, next) {
    const result = await db.query(
      `SELECT * FROM registration WHERE email='${req.query.email}';`
    );

  });

  // Send password reset email
  const transporter = nodemailer.createTransport({
    service: 'your-email-service-provider',
    auth: {
      user: '2021.roshni.talreja@ves.ac.in',
      pass: 'Rosh!1601',
    },
  });

  const mailOptions = {
    from: '2021.roshni.talreja@ves.ac.in',
    to: user.email,
    subject: 'Password Reset',
    text: `Click the following link to reset your password: http://localhost:3000/forgot/reset`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Password reset email sent:', info.response);
    }
  });
});

module.exports = router;
