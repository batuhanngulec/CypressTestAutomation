/// <reference types="cypress" />
import LoginPage from "../pages/login-page";
import HomePage from "../pages/home-page";
import MainPage from "../pages/main-page";
import ProductListPage from "../pages/product-list-page";

describe('Basket Test', () => {
  const loginPage = new LoginPage(); 
  const homePage = new HomePage();
  const mainPage = new MainPage();
  const productListPage = new ProductListPage();

  it('Add To Product', () => {
      loginPage.visit()
        .fillEmail("batuhangulec23@yandex.com")
        .fillPassword("TestAutomationDemo123456")
        .clickLogin();
        homePage.checkLogin("Hesabım");
        // .fillSearch("Laptop")
        mainPage.fillSearchAndPressEnter("Laptop");

        productListPage
        .firstProductClick()
        .clickOverlay();
    })
})