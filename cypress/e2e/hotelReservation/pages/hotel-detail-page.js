class HotelDetail {
    clickMakeReservation(){
        cy.get("[class='btn btn-primary btn-block']").click();
    }

    chooseFirstRoom(){
        cy.get("[class='Prices--Reservation']").first().click();
    }
}
export default HotelDetail;