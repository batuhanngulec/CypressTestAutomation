class Action{
    addDeposit(value){
        cy.get("[ng-class='btnClass2']").click();
        cy.get("[ng-model='amount']").type(value);
        cy.get("[type='submit']").click();
        //cy.get("[ng-show='message']").should('have.text','Deposit Successful'); 
        cy.wait(3000);
        return this;
    }
    clearDeposit(){
        cy.get("[ng-model='amount']").clear();
        return this;
    }

    addWithdraw(value){
        cy.get("[ng-class='btnClass3']").click();
        cy.get("[ng-model='amount']").click();
        cy.wait(10000);
        cy.get("[placeholder='amount']").type(value);
        cy.get("[type='submit']").click();
        return this;
    }
    errorWithDraw(){
        cy.get("[ng-show='message']").should('have.text','Transaction Failed. You can not withdraw amount more than the balance.'); 
        return this;
    }

    succesWithDraw(){
        cy.get("[ng-show='message']").should('have.text','Transaction successful'); 
        return this;
    }
    logout(){
        cy.get("[class='btn logout']").click();
        cy.get("[class='btn home']").click();
        return this;
    }
}
export default Action;