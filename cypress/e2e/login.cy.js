import { login } from "../fixtures/selectors"

export const validLogin = function(){
        cy.get(login.signInButton).click()
        cy.get(login.usernameField).type(login.usernameText)
        cy.get(login.passwordField).type(login.passwordText)
        cy.get(login.showPasswordButton).click({force: true})
        cy.get(login.loginButton).click({force: true})
        cy.wait(2000)
}