import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

test.describe("test saucedemo website", () => {
  test("Verify that the user gets locked out message", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const userName = process.env.LOCKEDOUT_USER;
    const passWord = process.env.PASSWORD;
    const errorText = "Epic sadface: Sorry, this user has been locked out.";

    await loginPage.goToSaucePage();
    await loginPage.fillLogin(process.env.LOCKEDOUT_USER!, process.env.PASSWORD!);

    await loginPage.lockedOutMessage(errorText);
  });
});
