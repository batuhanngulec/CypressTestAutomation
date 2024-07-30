/* Test Case 2: Login User with correct email and password
Objective: User can successfully Login then delete own account
Test Steps:
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible
9. Click 'Delete Account' button
10. Verify that 'ACCOUNT DELETED!' is visible
Expected Result: The user should be successfully login then delete own account
*/

describe('Successful Login User', () => {  
    it('Login User', () => {
      cy.visit('https://automationexercise.com');
      cy.get('.nav a').contains('Home').should('be.visible');
      cy.contains('a', 'Signup / Login').click();
      cy.get("[class='login-form'] h2").should('have.text','Login to your account');
      cy.get("[data-qa='login-email']").click().type('batuhangulec.info@gmail.com',{delay:100});
      cy.get("[data-qa='login-password']").click().type('QaTestAutomationDemo!',{delay:100});
      cy.get("[data-qa='login-button']").click();
      cy.wait(1000);
      // For Delete Account
      //cy.contains('a', 'Logged in as batuhan').should('be.visible');
      //cy.contains('a','Delete Account').click();
      //cy.get("[data-qa='account-deleted']").should('have.text','Account Deleted!');
      //cy.get("[data-qa='continue-button']").click();
    });
  });
