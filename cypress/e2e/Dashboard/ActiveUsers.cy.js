import {activeSeller} from "../../fixtures/selectors" ;
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
const access = require("../login.cy.js");
describe('Dashboard',function () {
  before(function(){
    cy.visit("/")
    access.validLogin();
  })
  context("Active Sellers",function(){
    it("Automate Active Sellers",function(){
        cy.get(activeSeller.activesellersButton).should("be.visible").click() 
        cy.get(activeSeller.searchField).should("be.visible").click()
        cy.get(activeSeller.exportButton).click().wait(2000)
        cy.get(activeSeller.exportAsCvs).click().wait(2000)
        cy.get(activeSeller.exportButton).click().wait(2000)
        cy.get(activeSeller.exportAsExcel).click().wait(5000)
        cy.get(activeSeller.nameField).should("be.visible")
        cy.get(activeSeller.storeField).should("be.visible")
        cy.get(activeSeller.livecodeField).should("be.visible")
        cy.get(activeSeller.livekeyField).should("be.visible")
        cy.get(activeSeller.actionField).should("be.visible").wait(2000)
        cy.get(activeSeller.moreButton).click()
        cy.get(activeSeller.editLiveCodeButton).click().wait(5000)
        cy.get(activeSeller.editlivecodeField).click()
        cy.get(activeSeller.editlivecodeField).clear("22")
        cy.get(activeSeller.editlivecodeField).type("22")
        cy.get(activeSeller.editLiveKeyField).clear("2ORZCE").wait(2000).type("2ORZCE").wait(2000)
        cy.get(activeSeller.confirmButton).click().wait(2000)
        
        // sellers profile 

        // pagination
        cy.get(activeSeller.nextButton).scrollIntoView()
        cy.get(activeSeller.page1).click()
        cy.get(activeSeller.page2).click()
        cy.get(activeSeller.page3).click()
        cy.get(activeSeller.page4).click()
        cy.get(activeSeller.previousButton).click().click().click()
        cy.get(activeSeller.goToPage).type(1)
        cy.xpath(activeSeller.goButton).click()


    })
  })
})