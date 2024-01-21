import { test, expect } from '@playwright/test';
import { Login } from '../POM/login';

test.beforeAll(async () => {
    console.log('beforeAll');
});

test.afterAll(async () => {
    console.log('afterAll')
});

test.beforeEach(async () => {
    console.log('beforeach');
});

test.afterEach(async () => {
    console.log('aftereach')
});


test('2nd tc @mahi', async ({ page }) => {
    let url = new Login(page);
    await url.naviagteToURL();

})