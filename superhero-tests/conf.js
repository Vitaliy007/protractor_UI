exports.config = {
  framework: "jasmine2",

  seleniumAddress: "http://localhost:4444/wd/hub",

  onPrepare: function() {
    // By default, Protractor use data:text/html,<html></html> as resetUrl, but
    // location.replace from the data: to the file: protocol is not allowed
    // (we'll get ‘not allowed local resource’ error), so we replace resetUrl with one
    // with the file: protocol (this particular one will open system's root folder)
    browser.resetUrl = "file://";
  },

  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      // --allow-file-access-from-files - allow XHR from file://
      args: ["allow-file-access-from-files"]
    }
  },

  specs: ["./test/login_spec.js",
  "./test/roster_spec.js"],

  jasmineNodeOpts: {
    showColors: true
  }
};
