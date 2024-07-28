/// <reference types="cypress" />
import LoginCustomer from "../pages/login-customer";
import AddToChart from "../pages/add-to-chart";
import MakePurchase from "../pages/make-purchase";

describe ('Customer Actions', () => {
    const loginCustomer = new LoginCustomer();
    const addToChart = new AddToChart();
    const makePurchase = new MakePurchase();
    it('Register Success',() =>{
        loginCustomer.visit().signUp("batuhangulec7","batuhangulec777");
    })
    it('Register UnSuccess',() =>{
        loginCustomer.visit().signUp("batuhangulec7","batuhangulec777");
        loginCustomer.javascriptAlert("This user already exist.");
    })
    it('Login Succes', () =>{
        loginCustomer.visit()
        .login("batuhangulec7","batuhangulec777");

    })
    it('Login UnSucces Wrong Passwd', () =>{
        loginCustomer.visit()
        .login("batuhangulec7","batuhangulec7777");
        loginCustomer.javascriptAlert("Wrong password.");

    })
    it('Login UnSucces Wrong Username', () =>{
        loginCustomer.visit()
        .login("batuhangulec","batuhangulec777");
        loginCustomer.javascriptAlert("User does not exist.");

    })
    it('Add To Chart',()=>{
        loginCustomer.visit().login("batuhangulec7","batuhangulec777");
        addToChart.visitPhones("Nokia lumia 1520");
        loginCustomer.javascriptAlert("Product added.");
    })
    it('Check Cart', ()=>{
        loginCustomer.visit().login("batuhangulec7","batuhangulec777");
        addToChart.checkCart("Nokia lumia 1520")
        // For delete product ==> .deleteCartItem();
    })
    it.only('Make Purchase Succes',() =>{
        loginCustomer.visit().login("batuhangulec7","batuhangulec777");
        makePurchase.placeOrder()
        .fillOrder("Batuhan","Turkey","Antalya","999999999","12","24");

    })
})