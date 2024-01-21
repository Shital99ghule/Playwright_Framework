import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly loginOption: Locator;
    readonly userName: Locator;
    readonly password: Locator;
    readonly login: Locator;
    readonly signUp: Locator;
    readonly phonesCategory: Locator;
    readonly firstPhone: Locator;

    constructor(page) {

        this.page = page;
        this.loginOption = page.locator('#login2');
        this.userName = page.locator('#loginusername');
        this.password = page.locator('#loginpassword');
        this.login = page.locator('[onclick="logIn()"]');
        this.signUp = page.locator('#signin2');
        this.phonesCategory = page.locator("a#itemc");
        this.firstPhone = page.locator('h4.card-title a');
    }
}
