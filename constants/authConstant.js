/**
 * authConstant.js
 * @description :: constants used in authentication
 */

const JWT = {
  ADMIN_SECRET:'myjwtadminsecret',
  CLIENT_SECRET:'myjwtclientsecret',
  DEVICE_SECRET:'myjwtdevicesecret',
  EXPIRES_IN: 10000
};

const USER_TYPES = {
  Admin:1,
  Staff:2,
};

const PLATFORM = {
  ADMIN:1,
  CLIENT:2,
  DEVICE:3,
};

let LOGIN_ACCESS = {
  [USER_TYPES.Admin]:[PLATFORM.ADMIN,PLATFORM.CLIENT,PLATFORM.DEVICE],        
  [USER_TYPES.Staff]:[PLATFORM.CLIENT],        
};

const MAX_LOGIN_RETRY_LIMIT = 3;
const LOGIN_REACTIVE_TIME = 20;   

const FORGOT_PASSWORD_WITH = {
  LINK: {
    email: true,
    sms: false
  }
};

module.exports = {
  JWT,
  USER_TYPES,
  PLATFORM,
  MAX_LOGIN_RETRY_LIMIT,
  LOGIN_REACTIVE_TIME,
  FORGOT_PASSWORD_WITH,
  LOGIN_ACCESS,
};