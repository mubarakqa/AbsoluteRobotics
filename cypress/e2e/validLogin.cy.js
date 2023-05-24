import { login } from "../fixtures/selectors"

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe("Valid login", function() {
    before(function(){
        cy.visit("/")
    })
    context("Login successfully", function() {
        it("click on sign in account", function() {
            cy.wait(2000)
            cy.get(login.signInButton).click()
            cy.get(login.usernameField).type(login.usernameText)
            cy.get(login.passwordField).type(login.passwordText)
            cy.get(login.showPasswordButton).click({force: true})
            cy.get(login.loginButton).click({force: true})
            cy.wait(70000)
        }) 

    })
})



 /* it("type in email", function() {
            cy.get(login.usernameField).type(login.usernameText)
        })
        it("type in password", function() {
            cy.get(login.passwordField).type(login.passwordText)
            // need to force true
        })
        it("click on show password",function(){
            cy.get(login.showPasswordButton).click({force: true})
        })
        it("click on password", function() {
          cy.get(login.loginButton).click()
        }) */