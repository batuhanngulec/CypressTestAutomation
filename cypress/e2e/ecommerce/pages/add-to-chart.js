class AddToChart{
    visitPhones(phoneName){
        cy.get("[id='itemc']").contains("Phones").click();
        cy.wait(1000);
        cy.contains('.card-title a', phoneName).click();
        cy.wait(500);
        cy.get("[onclick='addToCart(2)']").click();
        return this;

    }
    visitLaptops(){
        cy.get("[id='itemc']").contains("Laptops").click();
        return this;
    }
    visitMonitors(){
        cy.get("[id='itemc']").contains("Monitors").click();
        return this;
    }
    checkCart(phoneName){
        cy.get("[id='cartur']").click();
        cy.wait(200);
        cy.get('#tbodyid').find('tr').should('contain', phoneName);
        return this;
    }
    deleteCartItem(){
        cy.get('#tbodyid')
            .contains('Nokia lumia 1520') // Find Product
            .parent() 
            .find('a')
            .contains('Delete')
            .click(); 
        return this;
    }


}
export default AddToChart;