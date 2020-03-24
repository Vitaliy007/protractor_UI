var TestPage = function() {};

TestPage.prototype = Object.create(
  {},
  {
    emailFld: {
      get: function() {
        return element(by.id("loginEmail"));
      }
    },
    passwordFld: {
      get: function() {
        return element(by.id("loginPassword"));
      }
    },
    loginTitleTxt: {
      get: function() {
        return element(by.id("login-title"));
      }
    },
    submitBtn: {
      get: function() {
        return element(by.buttonText("Submit"));
      }
    }
  }
);

module.exports = TestPage;
