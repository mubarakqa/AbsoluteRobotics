import {checkout} from "../fixtures/selector.js";
describe("Given I am on the login page", function () {
beforeEach(function () {
cy.visit('/')
});
it("CHECKOUT - I Should be able to checkout my product", function () {
    cy.get(checkout.signupBtn).click()
    cy.get(checkout.usernameField).click()
    cy.get(checkout.usernameField).type('qlason@yopmail.com')
    cy.get(checkout.passwordField).click()
    cy.get(checkout.passwordField).type('TITILOLAMi@1')
    cy.get(checkout.loginBtn).click()
    cy.wait(6000)
    cy.get(checkout.cartBtn).click()
    cy.get(checkout.checkoutBtn).click({force:true})
    cy.get(checkout.addressbtn).click()
    cy.get(checkout.processbtn).click()
    cy.get(checkout.pickupbtn).click()
    cy.get(checkout.ekentapayment).click()
    //cy.get(checkout.flutterwave).click()
    cy.get(checkout.processBtn).click() 
    cy.get(checkout.confirmBtn).click() 
})
})