// sessionHandler.js
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth() + 1; // Month is zero-based, so add 1
var currentDay = currentDate.getDate();
var date1 = currentYear+"-"+currentMonth+"-"+currentDay;

const setDate = (newdate) => {
 date1 = newdate;
};

const getDate = () => {
  console.log(date1)
  return date1;
};

module.exports = {
  setDate,
  getDate
};