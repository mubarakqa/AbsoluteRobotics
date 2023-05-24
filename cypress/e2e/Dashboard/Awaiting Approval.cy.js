import {dashboard} from "../../fixtures/selectors" ;
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
const access = require("../login.cy.js");
describe('Awaiting Approval',function () {
  beforeEach (function(){
    cy.visit("/")
    access.validLogin();
  });
  context("Awaiting Approval", function(){
    it.only('awaiting approval is visible', function() {
      cy.get(dashboard.awaitingApprovalButton).should("be.visible")
      cy.get(dashboard.awaitingApprovalButton).click()
      cy.get(dashboard.awaitingUsers).should("be.visible") 
      cy.xpath(dashboard.options).click()
      cy.get(dashboard.sellerStatus).scrollIntoView().should("be.visible")
      cy.get(dashboard.sellerStatus).select("Approve")
      cy.wait(2000)
      cy.get(dashboard.sellerStatus).select("Block")
      cy.wait(2000)
      cy.get(dashboard.sellerStatus).select("Pending")
      cy.get(dashboard.cancelButton).click()
      cy.xpath(dashboard.updateButton).click()
      cy.get(dashboard.successfulMessage).should("be.visible")
      cy.get(dashboard.backButton).click()
      cy.get(dashboard.backToDashboardButton).click()
      cy.get(dashboard.usersAwaitingApproval).scrollIntoView().should("be.visible")
    })

    /*it("click on awaiting approval button",function(){
      cy.get(dashboard.awaitingApprovalButton).click()
    })
    it("user should able to view awaiting users are visible",function(){
      cy.get(dashboard.awaitingUsers).should("be.visible")
    })
    it(" click on options",function(){
      cy.get(dashboard.options).click()
    })
    it("user should be able to view seller status",function(){
      cy.get(dashboard.sellerStatus).scrollIntoView().should("be.visible")
    })
    it(" user should be able to select approve",function(){
      cy.get(dashboard.sellerStatus).select("Approve")
      cy.wait(2000)
    })
    it(" user should be able to select block",function(){
      cy.get(dashboard.sellerStatus).select("Block")
      cy.wait(2000)
    })
    it(" user should be able to select pending",function(){
      cy.get(dashboard.sellerStatus).select("Pending")
      cy.wait(2000)
    })
    it("user should be able to click on cancel button",function(){
      cy.get(dashboard.cancelButton).click()
    it("user should be able to click on update button ",function(){
      cy.get(dashboard.updateButton).click()
    })
    })
    it("user should be able to view successful message",function(){
      cy.get(dashboard.successfulMessage).should("be.visible")
    })
    it(" ",function(){
      
    })*/
  })
})