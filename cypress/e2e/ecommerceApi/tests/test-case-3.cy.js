/* Test Case 3: Login User with incorrect email and password
Objective: Login User with incorrect email and password
Test Steps:
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter incorrect email address and password
7. Click 'login' button
8. Verify error 'Your email or password is incorrect!' is visible

Expected Result: The user should not be successfully login 
*/

describe('UnSuccessful Login User', () => {  
    it('Wrong Email and Password', () => {
      cy.visit('https://automationexercise.com');
      cy.get('.nav a').contains('Home').should('be.visible');
      cy.contains('a', 'Signup / Login').click();
      cy.get("[class='login-form'] h2").should('have.text','Login to your account');
      cy.get("[data-qa='login-email']").click().type('batuhangulec.infoo@gmail.com',{delay:100});
      cy.get("[data-qa='login-password']").click().type('QaTestAutomationDemoo!',{delay:100});
      cy.get("[data-qa='login-button']").click();
      cy.get("[action='/login'] p").should('have.text','Your email or password is incorrect!');
      cy.wait(1000);
    });
  });
