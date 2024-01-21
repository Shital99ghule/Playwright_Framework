import { test, expect } from '@playwright/test';
import { Pom_Manager } from '../POM/pomManager';
import { testData } from '../TestData/testdata';

test('DemoBlaze_E-Commerce', async ({ page }) => {

  let pomManager = new Pom_Manager(page);

  await page.goto(testData.url);
  await pomManager.homePage.loginOption.waitFor({ state: 'visible' });
  await pomManager.homePage.loginOption.click();
  await pomManager.homePage.userName.click();
  await pomManager.homePage.userName.fill(testData.userName);
  await pomManager.homePage.password.click();
  await pomManager.homePage.password.fill(testData.password);
  await pomManager.homePage.login.click();
  await pomManager.homePage.signUp.waitFor({ state: 'hidden' });
  await pomManager.homePage.phonesCategory.first().click();
  await pomManager.homePage.firstPhone.first().waitFor({ state: 'visible' });
  await pomManager.homePage.firstPhone.first().click();
  page.on('dialog', dialog => {
    dialog.dismiss().catch(() => { });
  });
  await pomManager.addToCartPage.addToCart.waitFor({ state: 'visible' });
  await pomManager.addToCartPage.addToCart.click();
  await pomManager.addToCartPage.cart.click();
  await pomManager.cartPage.itemsInCart.first().waitFor({ state: 'visible' });
  await pomManager.cartPage.placeOrder.click();
  await pomManager.cartPage.name.fill(testData.name);
  await pomManager.cartPage.country.fill(testData.country);
  await pomManager.cartPage.city.fill(testData.city);
  await pomManager.cartPage.creditCard.fill(testData.creditCardNumber);
  await pomManager.cartPage.month.fill(testData.month);
  await pomManager.cartPage.year.fill(testData.year);
  await pomManager.cartPage.purchaseOrder.scrollIntoViewIfNeeded()
  await pomManager.cartPage.purchaseOrder.click();
  await expect(pomManager.cartPage.thank_YouMessage).toBeVisible();
  await pomManager.cartPage.ok_Confirm.click();
});