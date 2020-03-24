var TestPage = require("../pageObjects/test-page");

describe("SuperHero page", function() {
  var testPage;
  beforeEach(function() {
    testPage = new TestPage();
    browser.ignoreSynchronization = true;
    // Open URL
    browser.get("file:///D:/Courses/protractor_UI-master/superhero/index.html");
  });

  afterEach(function() {});

  it("should load the correct url", function() {
    //
    testPage.emailFld.sendKeys("txt");
    testPage.passwordFld.sendKeys("txt");

    expect(testPage.loginTitleTxt.getText()).toEqual("Welcome. Please Log In.");
    expect(testPage.emailFld.getAttribute("value")).toEqual("txt");
    browser.sleep(5000);
  });
});
