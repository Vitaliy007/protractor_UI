var RosterPage = require('../pageObjects/roster_page')
var LoginPage = require("../pageObjects/login_page");

describe('Roster page', function() {
    var rosterPage
    var loginPage
    

    beforeEach(function() {
        rosterPage = new RosterPage()
        loginPage = new LoginPage()
        browser.ignoreSynchronization = true;
        browser.get("file:///D:/Courses/protractor_UI-master/superhero/index.html");
    })

    it('should display all default roster elements', function(){
    loginPage.emailField.sendKeys("text@mail.com");
    loginPage.passwordField.sendKeys("pass");
    loginPage.submitBtn.click();
        expect(rosterPage.rosterTitleTxt.isDisplayed()).toBe(true)
        expect(rosterPage.wolverItemTxt.isDisplayed()).toBe(true)
        expect(rosterPage.ironmanItemTxt.isDisplayed()).toBe(true)
        expect(rosterPage.deadpoolItemTxt.isDisplayed()).toBe(true)
        expect(rosterPage.thorItemTxt.isDisplayed()).toBe(true)
        expect(rosterPage.spidermanItemTxt.isDisplayed()).toBe(true)
        expect(rosterPage.rosterFieldLbl.isDisplayed()).toBe(true)
        expect(rosterPage.rosterFld.isDisplayed()).toBe(true)
        expect(rosterPage.submitBtn.isDisplayed()).toBe(true)
    })
    
    it('should add a hero', function(){
        loginPage.emailField.sendKeys("text@mail.com")
        loginPage.passwordField.sendKeys("pass")
        loginPage.submitBtn.click()
        rosterPage.rosterFld.sendKeys('Ms Marvel')
        rosterPage.submitBtn.click()
        expect(element(by.css('#hero-list > li:nth-child(6)')).isDisplayed()).toBe(true);
        expect(element(by.css('#hero-list > li:nth-child(6)')).getText()).toEqual('Ms Marvel');


    })

    it('', function(){

    })

    it('', function(){

    })

    it('', function(){

    })

    it('', function(){

    })

    it('', function(){

    })


    afterEach(function() {

    })
})