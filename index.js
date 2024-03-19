const express = require("express");
const bodyParser = require('body-parser');
const middleware = require("./routes/middleware")

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const session = require('express-session');
const ejs = require('ejs');


app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);


app.use(express.static('views'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  console.log('Started')
  res.redirect('/login')
});

var register = require("./routes/registration-route");
var login = require("./routes/login-route");
var dashboard = require("./routes/user-dashboard-route");
var deleteUser = require("./routes/delete-route")
var admin_login = require("./routes/admin-login-route")
var admin_dashboard = require("./routes/admin-dashboard-route")
var forgot_password = require("./routes/forgot-password-route")
var reset_password = require("./routes/reset-password-route")
var logout = require("./routes/logout-route")
var statistics = require("./routes/statistics-route")
var admin_profile = require("./routes/admin-profile-routes")
var graph = require("./routes/graph-route")
var user_profile = require("./routes/user-profile-route")
var set_date = require("./routes/date-route")
var admin_graph = require("./routes/admin-graph-route")
var admin_activity = require("./routes/admin-activity-route")
var admin_viewActivity=require("./routes/admin-viewActivity-route")
var my_devices=require("./routes/mydevices-route")
var user_viewActivity=require("./routes/user-viewActivity-route")
var admin_changePassword = require("./routes/admin-changePassword-route")
var admin_registration = require("./routes/admin-registration-route")
var admin_viewGraph=require('./routes/admin-viewGraph-route')
var user_viewActivityByDate = require('./routes/user-viewActivityByDate-route')
var user_changeDetails = require('./routes/user-changeDetails-route')
var deleteDevice = require('./routes/deleteDevice-route')



app.use('/register', register)
app.use('/login', login)
app.use('/dashboard', dashboard)
app.use('/delete', deleteUser)
app.use('/admin', admin_login)
app.use('/admin-dashboard', admin_dashboard)
app.use('/forgot', forgot_password)
app.use('/reset/xyz', reset_password)
app.use('/logout', logout)
app.use('/statistics', statistics)
app.use('/admin-profile', admin_profile)
app.use('/graph', graph)
app.use('/user-profile', user_profile)
app.use('/setDate', set_date)
app.use('/admin-graph',admin_graph)
app.use('/admin-activity',admin_activity)
app.use('/admin-viewActivity', admin_viewActivity)
app.use('/mydevices', my_devices)
app.use('/user-viewActivity', user_viewActivity)
app.use('/admin-changePassword', admin_changePassword)
app.use('/admin-registration', admin_registration)
app.use('/admin-viewGraph', admin_viewGraph)
app.use('./user-viewActivityByDate', user_viewActivityByDate)
app.use('/user-changeDetails', user_changeDetails)
app.use('/deleteDevice', deleteDevice)





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


