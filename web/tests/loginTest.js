const { url } = require('../../data/apiUrlData');
const { backOffice } = require('../../data/loginCrendetialsData');

Feature('Login');

Scenario('should be able to login with valid crendetials', async ({ I, loginPage, foldersPage }) => {
  I.amOnPage(url.backOffice);
  I.see(loginPage.paragraph.authenticate.text, 
    loginPage.paragraph.authenticate.element);
  I.waitForVisible(loginPage.inputs.email);
  I.waitForVisible(loginPage.inputs.password);
  I.see(loginPage.buttons.authenticate.text, loginPage.buttons.authenticate.element);
  I.fillField(loginPage.inputs.email, backOffice.username);
  I.fillField(loginPage.inputs.password, backOffice.password);
  I.click(loginPage.buttons.authenticate.element);
  I.waitForText(foldersPage.headers.text, 5, 'div');
}).tag('@web').tag('@bonus');