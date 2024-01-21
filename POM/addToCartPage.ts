import { Locator, Page } from '@playwright/test';

export class AddTocartPage {

    readonly page: Page;
    readonly addToCart: Locator;
    readonly cart: Locator;


    constructor(page) {

        this.page = page;
        this.addToCart = page.locator('[onclick="addToCart(1)"]');
        this.cart = page.locator('#cartur');
    }
}
