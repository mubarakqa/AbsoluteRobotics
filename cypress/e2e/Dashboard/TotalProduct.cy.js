import { totalProduct,pagination } from "../../fixtures/selectors"
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
    context("Automate total products",function(){
        it("user should be able to navigate around the total product section/page",function(){
            cy.get(totalProduct.totalProductButton).click()
            cy.get(totalProduct.sellNewButton).should("be.visible").click()
            cy.get(totalProduct.addProductTitle).should("be.visible").wait(2000)
            cy.get(totalProduct.backButton).click()

            cy.get(totalProduct.sellUsedButton).should("be.visible").click().wait(2000)
            cy.get(totalProduct.addProductTitle).should("be.visible").wait(2000)
            cy.get(totalProduct.backButton).click()

            cy.get(totalProduct.searchField).should("be.visible").click().type(totalProduct.searchItem).wait(2000).clear(totalProduct.searchItem)

           

            cy.get(totalProduct.pictureColumn).should("be.visible",{force: true}).wait(1000)
            cy.get(totalProduct.nameColumn).should("be.visible").wait(1000)
            

            cy.get(totalProduct.productsField).should("be.visible")

            // user was able to flag and  unflag product to use feature update the selector 
            //cy.get(totalProduct.toggleButton).click().wait(1000).click()
        
            cy.get(totalProduct.moreButton).click().wait(1000)
            cy.get(totalProduct.editProductButton).click().wait(2000)
            cy.get(totalProduct.backButton).click()

            cy.get(pagination.goButton).scrollIntoView().should("be.visible").wait(1000)
            cy.get(pagination.page2).click()
            cy.get(pagination.page1).click()
            cy.get(pagination.page3).click()
            cy.get(pagination.page4).click()
            cy.get(pagination.previousButton).click().click().click()
            cy.get(pagination.goToPage).type(1)
            cy.get(pagination.goButton).click()

        })
    })
})