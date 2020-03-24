var RosterPage = function () {}

RosterPage.prototype = Object.create({}, {
    rosterTitleTxt: {get: function () {return element(by.css('.justify-content-md-center > h3'))}},
    wolverItemTxt: {get: function () {return element(by.css('#hero-list > li:nth-child(1)'))}},
    ironmanItemTxt: {get: function () {return element(by.css('#hero-list > li:nth-child(2)'))}},
    deadpoolItemTxt: {get: function () {return element(by.css('#hero-list > li:nth-child(3)'))}},
    thorItemTxt: {get: function () {return element(by.css('#hero-list > li:nth-child(4)'))}},
    spidermanItemTxt: {get: function () {return element(by.css('#hero-list > li:nth-child(5)'))}},
    rosterFieldLbl: {get: function () {return element(by.css('#addHero-form > div > label'))}},
    rosterFld: {get: function () {return element(by.id('heroInput'))}},
    submitBtn: {get: function () {return element(by.css('#addHero-form > button'))}},
})

module.exports = RosterPage