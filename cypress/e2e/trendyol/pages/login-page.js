class LoginPage{

    visit(){
        cy.visit("https://www.trendyol.com/giris");
        return this;
    }

    fillEmail(value){
        cy.get("[id='login-email']").type(value,{delay:100});
        return this;
    }
    fillPassword(value){
        cy.get("[id='login-password-input']").type(value,{delay:100});
        return this
    }
    clickLogin(){
        cy.get("[class='q-layout login'] button").click();
        return this;
    }
    checkLogin(value){
        cy.get("[class='link account-user'] p").should('have.text',value);
        return this;
    }
    errorMessageDisplayedControl(value){
        cy.get("[class='message']").should('have.text',value);   
        return this;    
    }

    errorMessageControl(value){
        cy.get("[class='message']").should('have.text', value);
        return this;   

    }
}

export default LoginPage;