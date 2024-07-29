/// <reference types="cypress" />
import ManagerAction from "../pages/bank-manager-action"

describe ('Bank Manager Actions', () => {
    const managerAction = new ManagerAction();
    // -------------------------------------------------------------------------------------------------// 
    // Test case: Bank Manager Add Customer And Account
    // Objective: Bank manager successfully adds customers and opens customer accounts
    // Test Steps:
    // Open the website.
    // Click Bank Manager Login
    // Click Add Customer 
    // Fill blanks and click Add Customer Button
    // Click Open Account 
    // Select Customer
    // Select Currency 
    // Click Proccess Button
    // Expected Result: Bank Manager successfully adds a customer. Opens an account for the customer. 
    it('Bank Manager Add Customer And Account', () =>{
        managerAction.visit()
        .addCustomer("Batuhan","Güleç","0700")
        .openAccount();
    })
    // -------------------------------------------------------------------------------------------------// 
    // remove customer succes and check if delete customer
    it.only('Bank Manager Remove Customer', () =>{
        managerAction.visit()
            .deleteAccount("Harry","Potter");

    })


})