var LoginPage = function() {};

LoginPage.prototype = Object.create(
  {},
  {
    loginTitleTxt: {
      get: function() {
        return element(by.id("login-title"));
      }
    },
    emailField: {
      get: function() {
        return element(by.id("loginEmail"));
      }
    },
    passwordField: {
      get: function() {
        return element(by.id("loginPassword"));
      }
    },
    rememberChk: {
      get: function() {
        return element(by.id("rememberLoginChk"));
      }
    },
    submitBtn: {
      get: function() {
        return element(by.css("#form-login button"));
      }
    },
    loginErrorMsg: {
      get: function() {
        return element(by.id("login-alert"));
      }
    }
  }
);

module.exports = LoginPage;
