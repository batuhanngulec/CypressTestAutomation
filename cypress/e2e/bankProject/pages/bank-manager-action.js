class ManagerAction{
    visit(){
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
        cy.get("[ng-click='manager()']").click();
        return this;
    }

    addCustomer(fname,lname,post){
        cy.get("[ng-click='addCust()']").click();
        cy.get("[ng-model='fName']").type(fname);
        cy.get("[ng-model='lName']").type(lname);
        cy.get("[ng-model='postCd']").type(post);
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
    deleteAccount(name, surname){
        cy.get("[ng-class='btnClass3']").click();
        cy.get('tbody')
          .contains('tr', name)
          .contains('tr', surname)
          .within(() => {
              cy.get('button')
                .contains('Delete')
                .click();
          });

        cy.get('tbody')
          .should('not.contain', name)
          .and('not.contain', surname);
    }

}
export default ManagerAction;