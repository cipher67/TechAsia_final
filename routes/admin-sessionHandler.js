// sessionHandler.js
let sessionUsername = '';

const setSessionUsername = (email) => {
  sessionUsername = email;
};

const getSessionUsername = () => {
  return sessionUsername;
};

module.exports = {
  setSessionUsername,
  getSessionUsername
};
