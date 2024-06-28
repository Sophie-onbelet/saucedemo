import { Locator, Page, expect } from '@playwright/test';

export class CheckOutCompletePage {
  page: Page;
  checkOutTitle: Locator;
  completedContainer: Locator;
  completeHeader: Locator;
  completeText: Locator;
  backHomeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkOutTitle = page.locator('span[class="title"]');
    this.completedContainer = page.locator('div[id="checkout_complete_container"]');
    this.completeHeader = page.locator('h2[class="complete-header"]');
    this.completeText = page.locator('div[class="complete-text"]');
    this.backHomeButton = page.locator('button[id="back-to-products"]');
  }

  async checkCorrectPage() {
    const currentUrl = this.page.url();
    const expectedUrl = 'https://www.saucedemo.com/checkout-complete.html';
    if (currentUrl !== expectedUrl) {
      return false;
    }
  }

  async checkOrderCompleted() {
    await expect(this.checkOutTitle).toHaveText('Checkout: Complete!');
    await expect(this.completedContainer).toBeVisible();
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
    await expect(this.completeText).toHaveText(
      'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
    );
  }

  async goBackHome() {
    await this.backHomeButton.click();
  }
}
