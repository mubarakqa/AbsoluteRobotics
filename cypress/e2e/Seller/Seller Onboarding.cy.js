import { sellerOnboarding } from "../../fixtures/selectors";

//here is the code that generates random details (username and email) 
const generateRandomEmail = (name) => `${name}${Math.floor(Math.random() * 1000)}@yopmail.com`;
const generateRandomUsername = (username) => `${username}${Math.floor(Math.random() * 1000)}`;

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

describe('Onboarding Seller', function() {
  beforeEach(function() {
    cy.visit("https://stage-qlason.vercel.app/switch/vendor/onboarding");
  });

  context("Sign Up as seller", function() {
    it("creating seller account", function() {
      const customEmailName = "rtrojan";
      const customUsername = "rtrojan";
      const randomEmail = generateRandomEmail(customEmailName);
      const randomUsername = generateRandomUsername(customUsername);
      const businessName= generateRandomUsername(customUsername) + "store";
      // above you can edit the random email, username , business name 
      
      
      cy.log('Random Email:', randomEmail);
      cy.log('Random Username:', randomUsername);

      cy.get(sellerOnboarding.firstNameField).click({ force: true }).type(sellerOnboarding.firstName).wait(1000);
      cy.get(sellerOnboarding.lastnameField).click({ force: true }).type(sellerOnboarding.lastname).wait(1000);
      cy.get(sellerOnboarding.usernameField).click({ force: true }).type(randomUsername).wait(1000);
      cy.get(sellerOnboarding.emailField).click({ force: true }).type(randomEmail).wait(1000);
      cy.get(sellerOnboarding.passwordField).click({ force: true }).type(sellerOnboarding.password).wait(1000);
      cy.get(sellerOnboarding.confirmPasswordField).click({ force: true }).type(sellerOnboarding.password).wait(1000);
      cy.get(sellerOnboarding.phoneNumberField).click({ force: true }).type(sellerOnboarding.phoneNumber).wait(1000);
      cy.get(sellerOnboarding.reffeedByField).click({ force: true }).type(sellerOnboarding.reffered).wait(2000);
      cy.get(sellerOnboarding.continueButton).click();

      cy.get(sellerOnboarding.businessNameField).click({force: true}).type(businessName)
      cy.get(sellerOnboarding.businessAddressField).click({force: true})
      cy.get(sellerOnboarding.businessAddressField).type(sellerOnboarding.businessAddress)
      cy.get(sellerOnboarding.selectCountry).select("Nigeria",{force:true})
      cy.get(sellerOnboarding.selectState).click({force:true}).wait(2000)
      //cy.get("css-ackcq").type("Lagos")
      cy.xpath("//div[contains(@class,'css-ackcql')]").select("Lagos",{force:true}).wait(2000)
                                          .type('{enter}',{force:true})
    
    
    
    
    });
  });
});
