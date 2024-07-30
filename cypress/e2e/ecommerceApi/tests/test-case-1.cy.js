/* Test case1: Register User
Objective: User can successfully Register  
Test Steps:
Open the website.
Click on 'Signup / Login' button
Verify 'New User Signup!' is visible
Enter name and email address
Click 'Signup' button
Verify that 'ENTER ACCOUNT INFORMATION' is visible
Fill details: Title, Name, Email, Password, Date of birth
Select checkbox 'Sign up for our newsletter!'
Select checkbox 'Receive special offers from our partners!'
Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
Click 'Create Account button'
Verify that 'ACCOUNT CREATED!' is visible
Click 'Continue' button
Verify that 'Logged in as username' is visible
Click 'Delete Account' button
Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
Expected Result: The user should be successfully register then delete own account
*/

describe('Successful Register User', () => {  
    it('Signup User', () => {
      cy.visit('https://automationexercise.com');
      cy.get('.nav a').contains('Home').should('be.visible');
      cy.contains('a', 'Signup / Login').click();
      cy.get("[class='signup-form'] h2").should('have.text','New User Signup!');
      cy.get("[data-qa='signup-name']").click().type('batuhan',{delay:100});
      cy.get("[data-qa='signup-email']").click().type('batuhangulec.info@gmail.com',{delay:100});
      cy.get("[data-qa='signup-button']").click();     
      cy.get("[class='login-form'] h2").first().should('have.text','Enter Account Information');
      cy.get("[id='id_gender1']").click();
      cy.get("[data-qa='password']").click().type('QaTestAutomationDemo!');
      cy.get("[data-qa='days']").select("7");
      cy.get("[data-qa='months']").select("July");
      cy.get("[data-qa='years']").select("1999");
      cy.get("[for='newsletter']").click();
      cy.get("[for='optin']").click();
      cy.wait(1000);
      cy.get("[data-qa='first_name']").click().type("Batuhan");
      cy.get("[data-qa='last_name']").click().type("Gulec");
      cy.get("[data-qa='company']").click().type("ECC");
      cy.get("[data-qa='address']").click().type("Adres1 Details");
      cy.get("[data-qa='address2']").click().type("Adres2 Details");
      cy.get("[data-qa='country']").select("Canada");
      cy.get("[data-qa='state']").click().type("State Name Demo");
      cy.get("[data-qa='city']").click().type("City Name Demo");
      cy.get("[data-qa='zipcode']").click().type("Zipcode Name Demo");
      cy.get("[data-qa='mobile_number']").click().type("5454554545");
      cy.get("[data-qa='create-account']").click();
      cy.wait(1000);
      cy.get("[data-qa='account-created']").first().should('have.text','Account Created!')
      cy.get("[data-qa='continue-button']").click();
      cy.contains('a', 'Logged in as batuhan').should('be.visible');
      cy.contains('a','Delete Account').click();
      cy.get("[data-qa='account-deleted']").should('have.text','Account Deleted!');
      cy.get("[data-qa='continue-button']").click();
    });
  });