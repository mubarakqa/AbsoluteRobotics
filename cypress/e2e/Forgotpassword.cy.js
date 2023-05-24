import {Forgotpassword} from "../fixtures/selectors.js";


describe("Given I am on the seller dashboard", function () {
    beforeEach(function () {
        cy.visit('/')


    });


    it("Forgetpassword - I Should not be able to reset password with invalid password", function () {
        cy.get(Forgotpassword.signinBtn).click()
        cy.get(Forgotpassword.Email).type("Wassy")
        cy.get(Forgotpassword.Password).type("1234567Qq@")
        cy.wait(3000)
        cy.get(Forgotpassword.Show).click({force:true})
        cy.get(Forgotpassword.Reset).click({force:true})
        cy.get(Forgotpassword.email1).type("wassy")
        cy.get(Forgotpassword.Submit).click()
        cy.get("span[class='undefined Field_error__cMhq9 Field_bottom__Wam+E']").should("be.visible")
        


    })

    it("Forgetpassword - I Should  be able to reset email with valid password", function () {
        cy.get(Forgotpassword.signinBtn).click()
        cy.get(Forgotpassword.Email).type("Wassy")
        cy.get(Forgotpassword.Password).type("1234567Qq@")
        cy.wait(3000)
        cy.get(Forgotpassword.Show).click({force:true})
        cy.get(Forgotpassword.Reset).click({force:true})
        cy.get(Forgotpassword.email1).type("wassy")
        cy.get(Forgotpassword.email1).clear()
        cy.wait(3000)
        cy.get(Forgotpassword.email1).type("fissy@yopmail.com")
        cy.get(Forgotpassword.Submit).click()
        //cy.get(".PageTitle_AppHeader_Title_Typography__0WTAl").should("be.visible")
        cy.wait(5000)
        cy.get(Forgotpassword.otp1).type("2")
        cy.get(Forgotpassword.otp2).type(2)
        cy.get(Forgotpassword.otp3).type("1")
        cy.get(Forgotpassword.otp4).type(0)
        cy.get(Forgotpassword.otp5).type(7)
        cy.get(Forgotpassword.otp6).type(5)
        cy.get(Forgotpassword.Newpassword).type("bunmi123@")
        cy.get(Forgotpassword.HideandShow).click()
        cy.get(Forgotpassword.Confirmpassword).type("bunmi123@")
        cy.get(Forgotpassword.Hide).click()
        cy.get(Forgotpassword.Reset).click()

})
})
