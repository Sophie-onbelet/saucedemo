import { Locator, Page } from '@playwright/test';
import { ShoppingCartPage } from './ShoppingCartPage';

export class ProductsPage {
  page: Page;
  productList: Locator;
  productItem: Locator;
  productTitle: Locator;
  productPrice: Locator;
  addToCartButton: Locator;
  shoppingCart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productList = page.locator('div[class="inventory_list"]');
    this.productItem = page.locator('div[class="inventory_item"]');
    this.productTitle = page.locator('div[class="inventory_item_name "]');
    this.productPrice = page.locator('div[class="inventory_item_price"]');
    this.addToCartButton = page.locator('button[name="add-to-cart-sauce-labs-backpack"]');
    this.shoppingCart = page.locator('a[class="shopping_cart_link"]');
  }

  async checkCorrectPage() {
    const currentUrl = this.page.url();
    const expectedUrl = 'https://www.saucedemo.com/inventory.html';
    if (currentUrl !== expectedUrl) {
      return false;
    }
  }

  async getProductTitles() {
    return this.productTitle.allTextContents();
  }

  async getProductPrices() {
    return this.productPrice.allTextContents();
  }

  async addProductToCart(product: string) {
    let productSelector: Locator;
    switch (product) {
      case 'sauce-labs-backpack':
        productSelector = this.page.locator('#add-to-cart-sauce-labs-backpack');
        break;
      case 'sauce-labs-bike-light':
        productSelector = this.page.locator('#add-to-cart-sauce-labs-bike-light');
        break;
      case 'sauce-labs-bolt-t-shirt':
        productSelector = this.page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
        break;
      case 'sauce-labs-fleece-jacket':
        productSelector = this.page.locator('#add-to-cart-sauce-labs-fleece-jacket');
        break;
      case 'sauce-labs-onesie':
        productSelector = this.page.locator('#add-to-cart-sauce-labs-onesie');
        break;
      case 'test.allthethings()-t-shirt-(red)':
        productSelector = this.page.locator('#add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)');
        break;
      default:
        throw new Error(`Product ID ${product} not recognized.`);
    }
    await productSelector.click();
  }

  async goToShoppingCart() {
    await this.shoppingCart.click();
    return new ShoppingCartPage(this.page);
  }
}
