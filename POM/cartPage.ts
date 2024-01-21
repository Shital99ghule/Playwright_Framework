import { Locator, Page } from '@playwright/test';

export class CartPage {

    readonly page: Page;
    readonly itemsInCart: Locator;
    readonly placeOrder: Locator;
    readonly name: Locator;
    readonly country: Locator;
    readonly city: Locator;
    readonly creditCard: Locator;
    readonly month: Locator;
    readonly year: Locator;
    readonly purchaseOrder: Locator;
    readonly thank_YouMessage: Locator;
    readonly ok_Confirm: Locator;

    constructor(page) {

        this.page = page;
        this.itemsInCart = page.locator('#tbodyid');
        this.placeOrder = page.locator('[data-target="#orderModal"]');
        this.name = page.locator('#name');
        this.country = page.locator('#country');
        this.city = page.locator('#city');
        this.creditCard = page.locator('#card');
        this.month = page.locator('#month');
        this.year = page.locator('#year');
        this.purchaseOrder = page.locator('[onclick="purchaseOrder()"]');
        this.thank_YouMessage = page.locator('.sweet-alert h2');
        this.ok_Confirm = page.locator('.confirm');
    }
}
