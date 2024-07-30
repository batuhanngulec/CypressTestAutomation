/* Test Case 4: Logout User
Objective: User can successfully Login then Logout
Test Steps:
. Navigate to url 'http://automationexercise.com'
. Verify that home page is visible successfully
. Click on 'Signup / Login' button
. Verify 'Login to your account' is visible
. Enter correct email address and password
. Click 'login' button
. Verify that 'Logged in as username' is visible
. Click 'Logout' button
. Verify that user is navigated to login page
Expected Result: The user should be successfully login then Logout succesfull
*/

describe('Successful Logout User', () => {  
    it('Login User', () => {
      cy.visit('https://automationexercise.com');
      cy.get('.nav a').contains('Home').should('be.visible');
      cy.contains('a', 'Signup / Login').click();
      cy.get("[class='login-form'] h2").should('have.text','Login to your account');
      cy.get("[data-qa='login-email']").click().type('batuhangulec.info@gmail.com',{delay:100});
      cy.get("[data-qa='login-password']").click().type('QaTestAutomationDemo!',{delay:100});
      cy.get("[data-qa='login-button']").click();
      cy.contains('a', 'Logged in as batuhan').should('be.visible');
      cy.contains('a','Logout').click();
      cy.get("[class='login-form'] h2").should('have.text','Login to your account');
    });
  });
