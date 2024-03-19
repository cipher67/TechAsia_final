const { getSessionEmail } = require("./sessionHandler");

// middleware.js
const requireLogin = (req, res, next) => {
  if (!req.session.email || !req.session.authorized) {
    // if (!getSessionEmail()) {
      console.log(getSessionEmail())
    console.log("if working properly")
    res.render('D:/TechAsia11/views/login.ejs', { alert: true })
  }
  else {
    next();
  }
};

module.exports = {
  requireLogin
};








