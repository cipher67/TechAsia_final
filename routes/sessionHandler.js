// sessionHandler.js
let sessionEmail = '';

const setSessionEmail = (email) => {
  sessionEmail = email;
};

const getSessionEmail = () => {
  return sessionEmail;
};

module.exports = {
  setSessionEmail,
  getSessionEmail
};
