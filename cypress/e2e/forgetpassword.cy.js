import {forgetpassword} from "../fixtures/selector.js";
describe("Given I am on the login page", function () {
beforeEach(function () {
cy.visit('/')
});
it("INVAILD LOGIN - I Should be able forget password", function () {
  cy.get(forgetpassword.signupBtn).click()
  cy.get(forgetpassword.usernameField).click()
  cy.get(forgetpassword.usernameField).type('qlason@yopmail.com')
  cy.get(forgetpassword.resetbtn).click({force: true})
  cy.get(forgetpassword.emailfield).type('qlason@yopmail.com')
  cy.get(forgetpassword.submitbtn).click()
  cy.get(forgetpassword.box1).type('3')
  cy.get(forgetpassword.box2).type('4')
  cy.get(forgetpassword.box3).type('3')
  cy.get(forgetpassword.box4).type('8')
  cy.get(forgetpassword.box5).type('7')
  cy.get(forgetpassword.box6).type('6')
  cy.get(forgetpassword.newpassword).type('TITILOLAMi@1')
  cy.get(forgetpassword.confirmpassword).type('TITILOLAMi@1')
  cy.get(forgetpassword.resetpassword).click()
  
  

})
})