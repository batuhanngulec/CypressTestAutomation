/// <reference types="cypress" />
import LoginPage from "../pages/login-page";
import HomePage from "../pages/home-page";

describe('Login Test', () => {
  const loginPage = new LoginPage(); 
  const homePage = new HomePage();

  it('Login Success', () => {
      loginPage.visit()
        .fillEmail("batuhangulec23@yandex.com")
        .fillPassword("TestAutomationDemo123456")
        .clickLogin()
        .homePage.checkLogin("Hesabım");
    })

  it('Login UnSuccess', () => {
      loginPage.visit()
        .fillEmail("batuhangulec23@yandex.comm")
        .fillPassword("TestAutomationDemo123456")
        .clickLogin()
        .errorMessageDisplayedControl("E-posta adresiniz ve/veya şifreniz hatalı.");

    })

    it('Incorrect Psswd', () => {
      loginPage.visit()
        .fillEmail("batuhangulec23@yandex.com")
        .fillPassword("TestAutomationDemo1234567")
        .clickLogin()
        .errorMessageControl("Lütfen geçerli bir e-posta adresi giriniz.");

    })

    it.only('Required Control', () => {
      loginPage.visit()
        .fillEmail(" ")
        .fillPassword("TestAutomationDemo1234567")
        .clickLogin()
        .errorMessageControl("Lütfen geçerli bir e-posta adresi giriniz.");

    })
})