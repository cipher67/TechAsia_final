// sessionHandler.js
let sessionMac = '';

const setSessionMac = (mac_id) => {
  sessionMac = mac_id;
};

const getSessionMac = () => {
  return sessionMac;
};

module.exports = {
  setSessionMac,
  getSessionMac
};
