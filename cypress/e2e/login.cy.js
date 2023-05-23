import {login} from "../fixtures/selector.js";
describe("Given I am on the login page", function () {
beforeEach(function () {
cy.visit('/')
});
it("LOGIN - I Should be able to sign in my account with valid", function () {
  cy.get(login.signupBtn).click()
  cy.get(login.usernameField).click()
  cy.get(login.usernameField).type('qlason@yopmail.com')
  cy.get(login.passwordField).click()
  cy.get(login.passwordField).type('TITILOLAMi@1')
  cy.get(login.loginBtn).click()
})
})
