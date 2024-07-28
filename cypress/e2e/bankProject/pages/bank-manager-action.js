class ManagerAction{
    visit(){
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
        cy.get("[ng-click='manager()']").click();
        return this;
    }

    addCustomer(){
        cy.get("[ng-click='addCust()']").click();
        cy.get("[ng-model='fName']").type('Batuhan');
        cy.get("[ng-model='lName']").type('Güleç');
        cy.get("[ng-model='postCd']").type('0700');
        cy.wait(1000);
        cy.get("[class='btn btn-default']").click();
        cy.wait(1000);
        return this;
    }

    openAccount(){
        cy.get("[ng-click='openAccount()']").click();
        cy.get("#userSelect")
          .select('Batuhan Güleç');
        
        cy.get("#currency").select('Dollar');
        cy.get("[type='submit']").click();
        return this;
    }

}
export default ManagerAction;