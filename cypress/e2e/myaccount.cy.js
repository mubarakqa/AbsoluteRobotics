import {myaccount} from "../fixtures/selector.js";
describe("Given I am on the login page", function () {
beforeEach(function () {
cy.visit('/')
});
it("MY ACCOUNT- I Should be able to view my account", function () {
    cy.get(myaccount.signupBtn).click()
    cy.get(myaccount.usernameField).click()
    cy.get(myaccount.usernameField).type('qlason@yopmail.com')
    cy.get(myaccount.passwordField).click()
    cy.get(myaccount.passwordField).type('TITILOLAMi@1')
    cy.get(myaccount.loginBtn).click()
    cy.get(myaccount.accountbtn).click()
})
    //it("MY ACCOUNT- I Should be able to click on manage profile button", function () {
        //cy.get(myaccount.signupBtn).click()
        //cy.get(myaccount.usernameField).click()
        //cy.get(myaccount.usernameField).type('qlason@yopmail.com')
        //cy.get(myaccount.passwordField).click()
        //cy.get(myaccount.passwordField).type('TITILOLAMi@1')
        //cy.get(myaccount.loginBtn).click()
        //cy.get(myaccount.accountbtn).click()
        //cy.wait(5000)
        //cy.get(myaccount.managebtn).click({force: true})
    //})

    //it("MY ACCOUNT- I Should be able to click on address button", function () {
        //cy.get(myaccount.signupBtn).click()
        //cy.get(myaccount.usernameField).click()
        //cy.get(myaccount.usernameField).type('qlason@yopmail.com')
        //cy.get(myaccount.passwordField).click()
        //cy.get(myaccount.passwordField).type('TITILOLAMi@1')
        //cy.get(myaccount.loginBtn).click()
        //cy.get(myaccount.accountbtn).click()
        //cy.get(myaccount.addressbtn).click({fore: true})
    //})


   // it("MY ACCOUNT- I Should be able to click on address button", function () {
       // cy.get(myaccount.signupBtn).click()
        //cy.get(myaccount.usernameField).click()
        //cy.get(myaccount.usernameField).type('qlason@yopmail.com')
        //cy.get(myaccount.passwordField).click()
        //cy.get(myaccount.passwordField).type('TITILOLAMi@1')
        //cy.get(myaccount.loginBtn).click()
        //cy.get(myaccount.accountbtn).click()
        //cy.get(myaccount.order).click()
//})
//it("MY ACCOUNT- I Should be able to click on saved item button", function () {
    //cy.get(myaccount.signupBtn).click()
    //cy.get(myaccount.usernameField).click()
    //cy.get(myaccount.usernameField).type('qlason@yopmail.com')
    //cy.get(myaccount.passwordField).click()
    //cy.get(myaccount.passwordField).type('TITILOLAMi@1')
    //cy.get(myaccount.loginBtn).click()
    //cy.get(myaccount.accountbtn).click()
    //cy.get(myaccount.saveditem).click()
//})

//it("MY ACCOUNT- I Should be able to click on help center button", function () {
    //cy.get(myaccount.signupBtn).click()
    //cy.get(myaccount.usernameField).click()
    //cy.get(myaccount.usernameField).type('qlason@yopmail.com')
    //cy.get(myaccount.passwordField).click()
    //cy.get(myaccount.passwordField).type('TITILOLAMi@1')
    //cy.get(myaccount.loginBtn).click()
    //cy.get(myaccount.accountbtn).click()
    //cy.get(myaccount.helpcenter).click()
//})
})

