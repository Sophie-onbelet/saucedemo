import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

test.describe("test saucedemo website", () => {
  test("Verify that the user gets locked out message", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const userName = process.env.LOCKEDOUT_USER;
    const passWord = process.env.PASSWORD;

    await loginPage.goToSaucePage();
    await loginPage.fillLogin(userName, passWord);

    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText(
      /Epic sadface: Sorry, this user has been locked out./
    );
  });
});
