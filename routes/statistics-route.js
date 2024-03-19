var express = require('express');
var router = express.Router();
var db = require('../db');
const {setSessionMac, getSessionMac} = require('./macHandler')

router.get('/', async function (req, res, next) {
  const result = await db.query(
    `INSERT INTO statistics (phone1, on_off, count, session_time, mac_id, time, date)
    VALUES ('${req.query.phone}', '${req.query.on_off}', '${req.query.count}', '${req.query.session_time}', '${req.query.mac_id}', CURRENT_TIME(), CURDATE())
    ON DUPLICATE KEY UPDATE
      on_off = VALUES(on_off),
      count = VALUES(count),
      session_time = VALUES(session_time),
      time = VALUES(time);
    `
  );

  const result1 = await db.query(
    `INSERT INTO statistics_graph(phone1, on_off, count, session_time, mac_id, time, date)
     VALUES 
     ('${req.query.phone}','${req.query.on_off}','${req.query.count}','${req.query.session_time}','${req.query.mac_id}', CURRENT_TIME(), CURDATE());`
  );

  let message = 'Error adding statistics';

  if (result.affectedRows) {
    message = 'Statistics added successfully';
    console.log({ message: message })
    res.send("Details sent successfully.")


  }
});

router.post('/', async function (req, res, next) {

  // const result = await db.query(
  //   `INSERT INTO statistics(phone1, on_off, count, session_time, mac_id, time, date)
  //    VALUES 
  //    ('${req.query.phone}','${req.query.on_off}','${req.query.count}','${req.query.session_time}','${req.query.mac_id}', CURRENT_TIME(), CURDATE());`
  // );

  // let message = 'Error adding statistics';

  // if (result.affectedRows) {
  //   message = 'Statistics added successfully';
  //   console.log({ message: message })
  //   res.send("Wohooo")


  // }
});
module.exports = router;

