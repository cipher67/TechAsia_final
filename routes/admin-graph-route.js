var express = require('express');
var router = express.Router();
var db = require('../db');
const Chart = require('chart.js');
const {setSessionEmail, getSessionEmail} = require('./sessionHandler')
const { setDate, getDate } = require("./current-dateHandler");
const {admin_requireLogin} = require("./admin-middleware")

router.get('/', admin_requireLogin, async function (req, res, next) {
  console.log(req.query.email)
  setSessionEmail(req.query.email)
  console.log(`setSessionEmail:${getSessionEmail()}`)

  const result = await db.query(
    `SELECT DISTINCT statistics_graph.mac_id FROM registration INNER JOIN statistics_graph ON registration.phone = statistics_graph.phone1 WHERE registration.email='${req.query.email}';`
  )

  const graphResults = [];

  for (const row of result) {
    const macId = row.mac_id;
    const graph = await db.query(
      `SELECT * FROM statistics_graph WHERE phone1=
            (SELECT phone
              FROM registration as r
              WHERE r.email='${req.query.email}') AND date='${getDate()}' AND mac_id='${macId}';`
    );

    graphResults.push(graph);
  }

  console.log(result)

  console.log(graphResults)
  res.render('D:/TechAsia11/views/admin-graph.ejs', { data: graphResults, date: getDate(), users: result });
});

router.post('/', async function (req, res, next) {
  // console.log(`getSessionEmail:${getSessionEmail()}`)
  res.redirect(`/admin-graph?email=${req.query.email}`);
});

module.exports = router;