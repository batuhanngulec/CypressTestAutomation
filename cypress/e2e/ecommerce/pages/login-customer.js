class LoginCustomer{
    visit(){
        cy.visit("https://www.demoblaze.com/");
        return this;
    }
    signUp(username,password){
        cy.get("[id='signin2']").click();
        cy.wait(1000);
        cy.get("[id='sign-username']").type(username);
        cy.wait(1000);
        cy.get("[id='sign-password']").type(password);
        cy.wait(1000);
        cy.get("[onclick='register()']").click();
        return this;
    }
    javascriptAlert(alert){
        cy.on('window:alert', (str) => {
            expect(str).to.equal(alert);
        });
    }

    login(username,password){
        cy.get("[id='login2']").click();
        cy.wait(1000);
        cy.get("[id='loginusername']").type(username);
        cy.wait(1000);
        cy.get("[id='loginpassword']").type(password);
        cy.wait(1000);
        cy.get("[onclick='logIn()']").click();
        return this;
    }


    clickCustomerButton(){
        cy.get("[ng-click='customer()']").click();
        return this;
    }

    addToChart(){
        cy.get("[onclick='addToCart(8)']").click();
        return this;
    }
}
export default LoginCustomer;