import { blocked } from "../../fixtures/selectors.js";
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
const access = require("../login.cy.js");
describe("total products",function(){
    beforeEach(function(){
        cy.visit("/")
        access.validLogin();
    })

    context("Blocked Users",function(){
        it("user can automate blocked users",function(){
            cy.get(blocked.blockedButton).should("be.visible").click()
            cy.get(blocked.exportButton).click()
            cy.get(blocked.exportAsCvs).click().wait(1000)
            cy.get(blocked.exportButton).click()
            cy.get(blocked.exportAsExcel).click().wait(1000)
            cy.get(blocked.blockedUsers).should("be.visible").wait(2000)
            
            cy.get(blocked.moreButon).click().wait(1000)
            cy.get(blocked.edit).click().wait(1000)
            cy.get(blocked.editlivekeyfield).should("be.visible")
            cy.get(blocked.cancelButton).click()
            
            cy.get(blocked.moreButon).click()
            cy.get(blocked.sellerProfile).click()
            cy.get(blocked.sellerprofilespace).should("be.visible")
            cy.get(blocked.sellerProfileBackButton).click()

            cy.get(blocked.moreButon).click()
            cy.get(blocked.viewDeatailsButton).click()
            cy.get(blocked.deatailsSection).should("be.visible").wait(2000)
            cy.get(blocked.detailsBackButton).click()

        })
    })
})