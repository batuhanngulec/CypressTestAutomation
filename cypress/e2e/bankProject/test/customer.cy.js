/// <reference types="cypress" />
import LoginCustomer from "../pages/login-customer";
import Action from "../pages/action-customer";

describe ('Login Customer', () => {
    const loginCustomer = new LoginCustomer();
    const action = new Action();
    // -------------------------------------------------------------------------------------------------// 
    // Test case: Customer Successful Login
    // Objective: To verify that a user can successfully Login 
    // Test Steps:
    // Open the website.
    // Click Customer Login
    // Enter own username (e.g., 'Harry Potter').
    // Click Login Button
    // Expected Result: The user should be successfully login in and redirected to the personal page.
    it('Customer Login Succesful', () =>{
        loginCustomer.visit()
        .clickCustomerButton()
        .selectAccount("Harry Potter");

    })
    // -------------------------------------------------------------------------------------------------//
    // First Balance 0$
    it('Customer Add Deposit Successful', () =>{
        loginCustomer.visit()
        .clickCustomerButton()
        .selectAccount("Harry Potter");
        action.addDeposit("100");
    })

    it('Customer Add Deposit UnSuccessful', () =>{
        loginCustomer.visit()
        .clickCustomerButton()
        .selectAccount("Harry Potter");
        action.addDeposit("0");
        action.clearDeposit();
        action.addDeposit("-1"); 
    })

    it('Customer Add Withdraw UnSuccessful', () =>{
        loginCustomer.visit()
        .clickCustomerButton()
        .selectAccount("Harry Potter");
        action.addWithdraw("10");
        action.errorWithDraw();
    })

    it('Customer Add Withdraw Successful', () =>{
        loginCustomer.visit()
        .clickCustomerButton()
        .selectAccount("Harry Potter");
        action.addDeposit("100")
        .addWithdraw("20")
        .succesWithDraw()
        .logout();

    })    
})