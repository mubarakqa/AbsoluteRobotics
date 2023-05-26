import {addtocart} from "../fixtures/selector.js";
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe("Given I am on the homepage", function () {
beforeEach(function () {
cy.visit('/')
// });
// //it("MYCART - I Should be able to add product to my cart", function () {
//  // cy.get(addtocart.signupBtn).click()
//   cy.get(addtocart.usernameField).click()
//   cy.get(addtocart.usernameField).type('qlason@yopmail.com')
//   cy.get(addtocart.passwordField).click()
//   cy.get(addtocart.passwordField).type('TITILOLAMi@1')
//   cy.get(addtocart.loginBtn).click()
//   cy.wait(5000)
//   cy.get(addtocart.addBtn).click()
})

it("MYCART - I Should be able to view product on my cart", function () {
  cy.get(addtocart.signupBtn).click()
  cy.get(addtocart.usernameField).click()
  cy.get(addtocart.usernameField).type('qlason@yopmail.com')
  cy.get(addtocart.passwordField).click()
  cy.get(addtocart.passwordField).type('TITILOLAMi@1')
  cy.get(addtocart.loginBtn).click()
   cy.wait(5000)
  cy.get(addtocart.cartitem).click()
})
it("MYCART - I Should be able to remove product in my cart", function () {
cy.get(addtocart.signupBtn).click()
  cy.get(addtocart.usernameField).click()
  cy.get(addtocart.usernameField).type('qlason@yopmail.com')
  cy.get(addtocart.passwordField).click()
  cy.get(addtocart.passwordField).type('TITILOLAMi@1')
  cy.get(addtocart.loginBtn).click()
  cy.wait(5000)
  cy.get(addtocart.cartitem).click()
  cy.get(addtocart.removeprodutbtn).click({force: true}) 

// })
// it("MYCART - I Should be able to descrease my order quantity", function () {
//   cy.get(addtocart.signupBtn).click()
//    cy.get(addtocart.usernameField).click()
//    cy.get(addtocart.usernameField).type('qlason@yopmail.com')
//    cy.get(addtocart.passwordField).click()
//    cy.get(addtocart.passwordField).type('TITILOLAMi@1')
//    cy.get(addtocart.loginBtn).click()
//    cy.get(addtocart.cartitem).click()
//    cy.wait(5000)
//    cy.get(addtocart.minusbtn).click()
 })
})