import { Locator, Page, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

export class LoginPage {
  page: Page;
  username: Locator;
  password: Locator;
  submit: Locator;
  errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('input[name="user-name"]');
    this.password = page.locator('input[name="password"]');
    this.submit = page.locator('input[id="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async goToSaucePage() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async fillLogin(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.submit.click();
    return new ProductsPage(this.page);
  }

  async lockedOutMessage(message: string) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText(message);
  }
}
