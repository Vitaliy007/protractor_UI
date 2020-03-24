//Tests for login page

// Page Objects File
var LoginPage = require("../pageObjects/login_page"); // Update to my page object

describe("Login Page Tests", function() {
  var loginPage;
  beforeEach(function() {
    loginPage = new LoginPage();
    // not Angular
    browser.ignoreSynchronization = true;
    // Open URL
    browser.get("file:///D:/Courses/protractor_UI-master/superhero/index.html");
  });

  it("should display all login page elements", function() {
    expect(loginPage.loginTitleTxt.isDisplayed()).toBe(true);
    expect(loginPage.emailField.isDisplayed()).toBe(true);
    expect(loginPage.passwordField.isDisplayed()).toBe(true);
    expect(loginPage.rememberChk.isDisplayed()).toBe(true);
    expect(loginPage.rememberChk.isSelected()).toBe(false);

    expect(loginPage.submitBtn.isDisplayed()).toBe(true);
  });
  it("should display an error message when no email and pass entered", function() {
    loginPage.submitBtn.click();
    expect(loginPage.loginErrorMsg.isDisplayed()).toBe(true);
    expect(loginPage.loginErrorMsg.getText()).toEqual(
      "An e-mail and password are required."
    );
  });

  it("should display an error message when no password entered", function() {
    loginPage.emailField.sendKeys("text@mail.com");
    loginPage.submitBtn.click();
    expect(loginPage.loginErrorMsg.getText()).toEqual(
      "An e-mail and password are required."
    );
  });

  it("should display an error message when no email entered", function() {
    loginPage.passwordField.sendKeys("pass");
    loginPage.submitBtn.click();
    expect(loginPage.loginErrorMsg.getText()).toEqual(
      "An e-mail and password are required."
    );
  });

  it("should log the user", function() {
    loginPage.emailField.sendKeys("text@mail.com");
    loginPage.passwordField.sendKeys("pass");
    loginPage.submitBtn.click();
  });


  afterEach(function() {});
});
