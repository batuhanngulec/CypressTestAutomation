/// <reference types="cypress" />
// Link: https://automationexercise.com/api_list
describe('E-Commerce API Tests', () => {
    it('API 1: Get All Products List', () => {
      cy.request({
        method:"GET",
        url: "https://automationexercise.com/api/productsList"
      })
        .then((response) => {
          expect(response.status).to.eq(200); // 200 response code
        });
    });

    it('API 2: POST To All Products List', () => {
        // Request Method: POST
        // Response Code: 405
        // Response Message: This request method is not supported.
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/productsList',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200); // 405 response code
            expect(response.body).to.have.property('message','This request method is not supported.');
          });
      });

      it('API 3: Get All Brands List', () => {
        // Request Method: GET
        // Response Code: 200
        // Response JSON: All brands list
        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/brandsList',
        }).then((response) => {
            expect(response.status).to.eq(200); // 200 response code
          });
      });

      it('API 4: PUT To All Brands List', () => {
        // Request Method: PUT
        // Response Code: 405
        // Response Message: This request method is not supported.
        cy.request({
            method: 'PUT',
            url: 'https://automationexercise.com/api/brandsList',
        }).then((response) => {
            expect(response.status).to.eq(200); // 200 response code
            expect(response.body).to.have.property('message','This request method is not supported.');
          });
      });

      it('API 5: POST To Search Product', () => {
        // Request Method: POST
        // Request Parameter: search_product (For example: top, tshirt, jean)
        // Response Code: 200
        // Response JSON: Searched products list
        const searchTerm = 'top';
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/searchProduct',
            search_product: searchTerm
        }).then((response) => {
            expect(response.status).to.eq(200); // 200 response code
          });
      });

      it('API 6: POST To Search Product without search_product parameter', () => {
        // API URL: https://automationexercise.com/api/searchProduct
        // Request Method: POST
        // Response Code: 400
        // Response Message: Bad request, search_product parameter is missing in POST request.
        const searchTerm = 'top';
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/searchProduct',
        }).then((response) => {
            expect(response.status).to.eq(200); // 400 response code
            expect(response.body).to.have.property('message','Bad request, search_product parameter is missing in POST request.');
          });
      });

      it('API 7: POST To Verify Login with valid details', () => {
        // API URL: https://automationexercise.com/api/verifyLogin
        // Request Method: POST
        // Request Parameters: email, password
        // Response Code: 200
        // Response Message: User exists!
        const validEmail = 'batuhangulec.info@gmail.com';
        const validPassword = 'denemedenemedenemedeneme';
        cy.request('POST','https://automationexercise.com/api/verifyLogin',{
            email: validEmail,
            password: validPassword
        }).then((response) => {
            expect(response.status).to.eq(200); // 200 response code
            //expect(response.body.message).to.eq('User exists!');
            cy.log('Login Verification Response:', JSON.stringify(response.body));
          });
      });

      it.only('API 11: POST To Create/Register User Account', () => {
        // API URL: https://automationexercise.com/api/createAccount
        // Request Method: POST
        // Request Parameters: name, email, password, title (for example: Mr, Mrs, Miss), 
        //                      birth_date, birth_month, birth_year, firstname, lastname, company, 
        //                      address1, address2, country, zipcode, state, city, mobile_number
        // Response Code: 201
        // Response Message: User created!
        const userAccount = {
            name:'batuhangulec7',
            email:'batuhangulec.info@gmail.com',
            password:'QaTestAutomationDemo',
            title:'Batuhan Gulec',
            birth_date:'23',
            birth_month:'July',
            birth_year:'1999',
            firstname:'Batuhan',
            lastname:'Gulec',
            company:'Ecc',
            address1:'Antalya',
            address2:'Antalya2',
            country:'Turkey',
            zipcode:'07',
            state:'DemoState',
            city:'DemoCity',
            mobile_number:'54545454545455',
        };        
        cy.request('POST','https://automationexercise.com/api/createAccount',{
            userAccount
        }).then((response) => {
            expect(response.status).to.eq(200); // 201 response code
            //expect(response.body.message).to.eq('User created!');
            cy.log('Response Message:', JSON.stringify(response.body));
          });
      });
  });