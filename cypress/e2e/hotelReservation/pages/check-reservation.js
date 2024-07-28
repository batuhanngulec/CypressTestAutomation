class CheckReservation {
    visit(){
        cy.visit("https://www.tatilsepeti.com");
        return this;
    }

    fillHotelName(value){
        cy.get("[id='bolge']").type(value);
        cy.get("[id='ui-id-5']").click();
        return this;
    }

    fillCheckInDate(value){
        cy.get("[id='giris-tarihi']").click();
        cy.get("[class='ui-state-default']").contains(value).click();
        return this;
    }
    fillCheckOutDate(value){
        cy.get("[class='ui-state-default']").contains(value).click();
        return this;
    }
    checkOnlyAvailableHotels(){
        cy.get("[for='m']").click();
        return this;
    }
    enterSearchButton(){
        cy.wait(1000);
        cy.get("[id='searchBtn']").click();
        cy.wait(10000);
        return this;
    }

    enterFirstHotel(){
        cy.get("[class='btn btn-block btn-primary']").first().invoke('removeAttr', 'target').click();
        return this;
    }


    //checkLogin(value){
     //   cy.get("[class='link account-user'] p").should('have.text',value);
     //   return this;
    //}
    //fillSearchAndPressEnter(value){
      //  cy.get("[data-testid='suggestion']").clear();
       // cy.get("[data-testid='suggestion']").type(value + "{enter}", {delay:100});
        //return this;
   // }

}

export default CheckReservation;