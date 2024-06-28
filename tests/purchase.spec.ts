import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { ShoppingCartPage } from '../pages/ShoppingCartPage';
import { User } from '../models/User';
import { YourInformationPage } from '../pages/YourInformationPage';
import { CheckOutCompletePage } from '../pages/CheckOutCompletePage';
import { CheckOutOverview } from '../pages/OverviewPage';

test.describe('test saucedemo website', () => {
  test('Verify that the user gets locked out message', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductsPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);
    const user = new User();
    const yourInformationPage = new YourInformationPage(page);
    const checkOutOverviewPage = new CheckOutOverview(page);
    const checkOutCompletePage = new CheckOutCompletePage(page);

    //Login
    await loginPage.goToSaucePage();
    await loginPage.fillLogin(process.env.STANDARD_USER!, process.env.PASSWORD!);

    //Add 1 item to your cart
    await productPage.checkCorrectPage();
    await productPage.addProductToCart('sauce-labs-backpack');
    await productPage.goToShoppingCart();

    //Verify item and proceed check out process
    await shoppingCartPage.verifyShoppingCart('Sauce Labs Backpack');
    await shoppingCartPage.checkOutShoppingCart();
    await yourInformationPage.fillCheckOutInformation(user);
    await checkOutOverviewPage.checkCorrectPage();
    await checkOutOverviewPage.verifyShoppingCart('Sauce Labs Backpack');
    await checkOutOverviewPage.checkOutShoppingCart();
    await checkOutCompletePage.checkCorrectPage();
    await checkOutCompletePage.checkOrderCompleted();
    await checkOutCompletePage.goBackHome();
  });
});
