// import { Product } from "../fixtures/selectors.js";


// describe("Given I am on the seller dashboard", function () {
//     beforeEach(function () {
//         cy.visit('/')


//     });


//     it("PRODUCT - I Should be able to create product", function () {
//         cy.get(Product.signIn).click()
//         cy.get(Product.Email).type("Wassy")
//         cy.get(Product.Password).type("1234567Qq@")
//         cy.get(Product.Show).click({ force: true })
//         cy.wait(3000)
//         cy.get(Product.ContinueBtn).click({ force: true })
//         cy.wait(3000)
//         cy.get(Product.product1).click({ force: true })
//         cy.get(Product.sellNew).click({ force: true })
//         cy.get(Product.selectCollection).click()
//         cy.get(Product.selectCollection1).type("Computer And Related Items", + "{enter}")
//         //cy.wait(3000)
//         //cy.get(".mb-2 > .custom-select > .CustomSelect_CustomSelect__Wrapper__v3P-L > .css-b62m3t-container > .css-1macy6r-control > .css-1d8n9bt > .css-ackcql").clear()
//         cy.get(3000)
//         //cy.get(Product.selectCollection1).type("Phones", + "{enter}") 
//         //cy.get(Product.Reset).click({force: true})
//         //cy.wait(3000)
//         //cy.get(Product.Emailaddress).click({force: true})
//         //cy.wait(3000)
//         //cy.get(Product.Emailaddress1).type("fissy@yopmail.com")
//         //cy.get(Product.Submit).click()

//     })

//     it("PHONES - I Should be able to create phones", function () {
//         cy.get(Product.signIn).click()
//         cy.get(Product.Email).type("Wassy")
//         cy.get(Product.Password).type("1234567Qq@")
//         cy.get(Product.Show).click({ force: true })
//         cy.wait(3000)
//         cy.get(Product.ContinueBtn).click({ force: true })
//         cy.wait(3000)
//         cy.get(Product.product1).click({ force: true })
//         cy.get(Product.sellNew).click({ force: true })
//         cy.get(Product.selectCollection).click()
//         cy.get(Product.selectCollection1).type("phones", + "{enter}")

//     })

//     it("Select Sub Collection Cateory - I Should be able to select sub collection category", function () {
//         cy.get(Product.signIn).click()
//         cy.get(Product.Email).type("Wassy")
//         cy.get(Product.Password).type("1234567Qq@")
//         cy.get(Product.Show).click({ force: true })
//         cy.wait(3000)
//         cy.get(Product.ContinueBtn).click({ force: true })
//         cy.wait(3000)
//         cy.get(Product.product1).click({ force: true })
//         cy.get(Product.sellNew).click({ force: true })
//         cy.get(Product.selectCollection).click()
//         cy.get(Product.selectCollection1).type("phones" + "{enter}")
//         cy.get(Product.SubCategoryCollection).click()
//         cy.get(Product.SubCategoryCollection).type("CarPartsAndAccessories" + "{enter}")

//     })
//     it.only("Select Select Sub Collection  - I Should be able to select sub collection", function () { 
//         cy.get(Product.signIn).click()
//         cy.get(Product.Email).type("Wassy")
//         cy.get(Product.Password).type("1234567Qq@")
//         cy.get(Product.Show).click({ force: true })
//         cy.wait(3000)
//         cy.get(Product.ContinueBtn).click({ force: true })
//         cy.wait(3000)
//         cy.get(Product.product1).click({ force: true })
//         cy.get(Product.sellNew).click({ force: true })
//         cy.get(Product.selectCollection).click()
//         cy.get(Product.selectCollection1).type("Computer & Related Items" + "{enter}")
//         cy.get(Product.SubCategoryCollection).click()
//         cy.wait(3000)
//         cy.get(Product.SubCategoryCollection).type("Laptops" + "{enter}")
//         //cy.get(Product.SelectSubCollection).click({force: true})
//         cy.wait(3000);
//         cy.get(Product.SelectSubCollection).type("Macbooks" + "{enter}")
//         cy.get(Product.ProductName).type("Ipad")
//         cy.wait(3000)
//         cy.get(Product.Description).type("The ipad runs ios shipped with several popular apple and third party apps preinstalled")
//         cy.get(Product.Brand).type("Apple" + "{enter}")
//         cy.wait(3000)
//         cy.get(Product.SelectFeature).type("Color" + "{enter}")
//         cy.get(Product.FeatureValue).type("2000")
//         cy.get(Product.UnitValue).type("1000")
//         cy.get(Product.ProductWeight).type("2")
//         cy.get(Product.DefaultPrice).type("15000")
//         cy.wait(3000)
//         // cy.get(Product.Productquantity).type("1")
//         cy.get(Product.New).click()
//     })
// })