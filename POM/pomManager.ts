import { Page } from '@playwright/test';
import { AddTocartPage } from "./addToCartPage";
import { CartPage } from "./CartPage";
import { HomePage } from "./homePage";

export class Pom_Manager {

    readonly addToCartPage: any;
    readonly cartPage: any;
    readonly homePage: any;

    constructor(page: Page) {

        this.addToCartPage = new AddTocartPage(page);
        this.cartPage = new CartPage(page);
        this.homePage = new HomePage(page);
    }
}