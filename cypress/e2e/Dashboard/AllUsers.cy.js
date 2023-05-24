import {activeSeller, allUsers} from "../../fixtures/selectors"
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
const access = require("../login.cy.js");
describe('All Users',function () {
  before(function(){
    cy.visit("/")
    access.validLogin();
  })
  context("Automate All Users",function(){
    it("Automate the functions of all users",function(){
        cy.get(allUsers.allUsersButton).click()
        cy.get(allUsers.allUsersPage).should("be.visible") // all user page is visible
        cy.wait(2000) 
        cy.get(allUsers.emailColumn).should("be.visible").trigger('mouseover')
        cy.get(allUsers.phoneNumberColumn).should("be.visible").trigger('mouseover')
        cy.get(allUsers.genderColumn).should("be.visible").trigger('mouseover')
        cy.get(allUsers.genderColumn).should("be.visible").trigger('mouseover')
        cy.get(allUsers.roleColumn).should("be.visible").trigger('mouseover')
        cy.get(allUsers.actionColumn).should("be.visible").trigger('mouseover').wait(2000)
        cy.get(allUsers.actionButton).click()
        cy.get(allUsers.viewButton).click()
        cy.get(allUsers.personalDetails).should("be.visible")
        cy.get(allUsers.backButton).click().wait(5000)
        cy.get(allUsers.actionButton).click().wait(3000)
        
        //user is unable to select options in the more action button
        cy.get(activeSeller.nextButton).scrollIntoView()

        cy.get(activeSeller.page2).click()
        cy.get(activeSeller.page3).click()
        cy.get(activeSeller.page4).click()
        cy.get(activeSeller.page1).click()
        cy.get(activeSeller.previousButton).click().click().click()
        cy.get(activeSeller.goToPage).type(1)
        cy.get(activeSeller.goButtonc).click()
    })

  })
})