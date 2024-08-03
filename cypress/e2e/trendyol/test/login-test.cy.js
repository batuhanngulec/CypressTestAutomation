/// <reference types="cypress" />
import LoginPage from "../pages/login-page";
import HomePage from "../pages/home-page";

describe('Login Test', () => {
  const loginPage = new LoginPage(); 
  const homePage = new HomePage();

  it.only('Login Success', () => {
      loginPage.visit()
        .fillEmail("demo@yandex.com") // fake mail 
        .fillPassword("TestAutomationDemo123456")
        .clickLogin();
      homePage.checkLogin("Hesabım");
    })

  it('Login UnSuccess', () => {
      loginPage.visit()
        .fillEmail("demo@yandex.comm") // fake mail 
        .fillPassword("TestAutomationDemo123456")
        .clickLogin()
        .errorMessageDisplayedControl("E-posta adresiniz ve/veya şifreniz hatalı.");

    })

    it('Incorrect Psswd', () => {
      loginPage.visit()
        .fillEmail("demo@yandex.com")
        .fillPassword("TestAutomationDemo1234567")
        .clickLogin()
        .errorMessageControl("Lütfen geçerli bir e-posta adresi giriniz.");

    })

    it('Required Control', () => {
      loginPage.visit()
        .fillEmail(" ")
        .fillPassword("TestAutomationDemo1234567")
        .clickLogin()
        .errorMessageControl("Lütfen geçerli bir e-posta adresi giriniz.");

    })
})