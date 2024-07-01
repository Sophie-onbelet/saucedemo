import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { User } from '../models/User';
import { products } from '../json/products.json';

test.describe('test saucedemo website', () => {
  test('Verify that user can complete a purchase', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const user = new User();

    //Login with standard user
    await loginPage.goToSaucePage();
    const productsPage = await loginPage.fillLogin(process.env.STANDARD_USER!, process.env.PASSWORD!);

    //Add 1 item to your cart
    await productsPage.checkCorrectPage();
    await productsPage.addProductToCart(products[0].id);
    const shoppingCartPage = await productsPage.goToShoppingCart();

    //Verify item and proceed check out process
    await shoppingCartPage.verifyShoppingCart(products[0].name);
    const yourInformationPage = await shoppingCartPage.checkOutShoppingCart();
    const checkOutOverviewPage = await yourInformationPage.fillCheckOutInformation(user);
    await checkOutOverviewPage.checkCorrectPage();
    await checkOutOverviewPage.verifyShoppingCart(products[0].name);
    const checkOutCompletePage = await checkOutOverviewPage.checkOutShoppingCart();
    await checkOutCompletePage.checkCorrectPage();
    await checkOutCompletePage.checkOrderCompleted();

    //Go back to HomePage
    await checkOutCompletePage.goBackHome();
  });
});
