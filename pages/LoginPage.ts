import { Locator, Page } from "@playwright/test";

export class LoginPage {
    page: Page;
    username: Locator;
    password: Locator;
    submit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('input[name="user-name"]');
        this.password = page.locator('input[name="password"]');
        this.submit = page.locator('input[id="login-button"]')
    }
    
    async goToSaucePage() {
        await this.page.goto('https://www.saucedemo.com/');
    }


    async fillLogin(username:string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.submit.click();
    }
}