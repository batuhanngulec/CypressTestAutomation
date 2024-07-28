/// <reference types="cypress" />
import ManagerAction from "../pages/bank-manager-action"

describe ('Bank Manager Actions', () => {
    const managerAction = new ManagerAction();

    it('Bank Manager Add Customer And Account', () =>{
        managerAction.visit().addCustomer().openAccount();
    })
})