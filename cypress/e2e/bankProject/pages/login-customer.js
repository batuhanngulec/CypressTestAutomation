class LoginCustomer{
    visit(){
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
        return this;
    }
    clickCustomerButton(){
        cy.get("[ng-click='customer()']").click();
        return this;
    }
    selectAccount(value){
        cy.get("[id='userSelect']").select(value);
        cy.get("[class='btn btn-default']").click();
        return this; 
    }
}
export default LoginCustomer;