/// <reference types="cypress" />
import CheckReservation from "../pages/check-reservation";
import HotelDetail from "../pages/hotel-detail-page";

describe ('Check Reservation', () => {
    const checkReservation = new CheckReservation();
    const hotelDetail = new HotelDetail();

    it('Chek-In and Check-Out Date Succesful', () =>{
        checkReservation.visit()
        .fillHotelName("Antalya")
        .fillCheckInDate("25")
        .fillCheckOutDate("31")
        .checkOnlyAvailableHotels()
        .enterSearchButton();
    })

    it('Check First Hotel Succesful', () =>{
        checkReservation.visit()
        .fillHotelName("Antalya")
        .fillCheckInDate("25")
        .fillCheckOutDate("31")
        .checkOnlyAvailableHotels()
        .enterSearchButton()
        .enterFirstHotel();
    })

    it('Detail Page Choose Room Succesful',() =>{
        checkReservation.visit()
        .fillHotelName("Antalya")
        .fillCheckInDate("25")
        .fillCheckOutDate("31")
        .checkOnlyAvailableHotels()
        .enterSearchButton()
        .enterFirstHotel();

        hotelDetail.clickMakeReservation();
        hotelDetail.chooseFirstRoom();
    })
    // cy.get("[id='signOut']").should('have.text','Text'); 
    
})