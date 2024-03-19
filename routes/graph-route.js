var express = require('express');
var router = express.Router();
var db = require('../db');
const Chart = require('chart.js');
const { getSessionEmail } = require('./sessionHandler.js');
const { setDate, getDate } = require("./current-dateHandler");


router.get('/', async function (req, res, next) {


  const result = await db.query(
    `  SELECT DISTINCT statistics_graph.mac_id FROM registration INNER JOIN statistics_graph ON registration.phone = statistics_graph.phone1 WHERE registration.email='${getSessionEmail()}';`
  )

  const graphResults = [];

  for (const row of result) {
    const macId = row.mac_id;
    const graph = await db.query(
      `SELECT * FROM statistics_graph WHERE phone1=
            (SELECT phone
              FROM registration as r
              WHERE r.email='${getSessionEmail()}') AND date='${getDate()}' AND mac_id='${macId}';`
    );

    graphResults.push(graph);
  }

  console.log(result)
  console.log(graphResults)
  res.render('D:/TechAsia11/views/graph.ejs', { data: graphResults, date: getDate(), users: result });


});
router.post('/', async function (req, res, next) {
  res.redirect('/graph')
});




module.exports = router;