// Test case: Successful Login
// Objective: To verify that a user can successfully log in 
// Test Steps:
// Open the website.
// Enter a valid username (e.g., 'standard_user').
// Enter the corresponding valid password (e.g., 'secret_sauce').
// Click the login button.
// Expected Result: The user should be successfully logged in and redirected to the products page.

describe('Successful Login Test', () => {
    beforeEach(() => {     
      // Unregister service workers
      if (window.navigator && navigator.serviceWorker) {
        const cypressPromise = new Cypress.Promise((resolve, reject) => {
          navigator.serviceWorker.getRegistrations().then((registrations) => {
            if (!registrations.length) resolve();
            Promise.all(registrations.map(reg => reg.unregister())).then(() => {
              resolve();
            });
          });
        });
        cy.wrap('Unregister service workers').then(() => cypressPromise);
      }
    });
  
    it('successfully logs in with valid credentials', () => {
      cy.visit('https://www.saucedemo.com/', { timeout: 10000 });
      cy.get('input[data-test="username"]').type('standard_user');
      cy.get('input[data-test="password"]').type('secret_sauce');
      cy.get('input[type="submit"]').click();
    });

    // Error Test Cases
    it('displays error for invalid password', () => {
      cy.visit('https://www.saucedemo.com/', { timeout: 10000 }); // Adjust timeout as needed
      cy.get('input[data-test="username"]').type('standard_user');
      cy.get('input[data-test="password"]').type('wrong_password');
      cy.get('input[type="submit"]').click();
      cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    });

    it('displays error for invalid username', () => {
      cy.visit('https://www.saucedemo.com/', { timeout: 10000 }); // Adjust timeout as needed
      cy.get('input[data-test="username"]').type('wrong_user');
      cy.get('input[data-test="password"]').type('secret_sauce');
      cy.get('input[type="submit"]').click();
      cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    });
  });