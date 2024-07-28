class MakePurchase{
    placeOrder(){
        cy.get("[id='cartur']").click();
        cy.get("[data-target='#orderModal']").click();
        return this;
    }
    fillOrder(name,country,city,card,month,year){
        cy.get("[id='name']").type(name);
        cy.wait(1000);
        cy.get("[id='country']").type(country);
        cy.wait(2000);
        cy.get("[id='city']").type(city);
        cy.wait(2000);
        cy.get("[id='card']").type(card);
        cy.wait(2000);
        cy.get("[id='month']").type(month);
        cy.wait(2000);
        cy.get("[id='year']").type(year);
        cy.wait(2000);
        cy.get("[onclick='purchaseOrder()']").click();
    }
    
}
export default MakePurchase
