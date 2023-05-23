import {invalid} from "../fixtures/selector.js";
describe("Given I am on the login page", function () {
beforeEach(function () {
cy.visit('/')
});
it("INVAILD LOGIN - I Should not be able to login with invalid", function () {
  cy.get(invalid.signupBtn).click()
  cy.get(invalid.usernameField).click()
  cy.get(invalid.usernameField).type('qlason@yopmail.com')
  cy.get(invalid.passwordField).click()
  cy.get(invalid.passwordField).type('ToTILOLAMi@1')
  cy.get(invalid.loginBtn).click()
})
})