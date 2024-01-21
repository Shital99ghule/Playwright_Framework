import { Page, Locator } from "@playwright/test";
import { testConfig } from "../testConfig";

export class Login {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async naviagteToURL() {
        if (process.env.ENV == 'dev') {
            await this.page.goto(testConfig[0].dev.url)
        };
        if (process.env.ENV == 'test') {
            await this.page.goto(testConfig[0].test.url)
        };
        if (process.env.ENV == 'stage') {
            await this.page.goto(testConfig[0].stage.url)
        };
    }

}