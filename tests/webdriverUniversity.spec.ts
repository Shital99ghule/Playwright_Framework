import { test, expect, Page } from '@playwright/test';
import { Login } from '../POM/login';
import path from 'path';

test.only('webdriver', async ({ page }) => {
    let url = new Login(page);
    await url.naviagteToURL();
    await page.locator('#udemy-promo-thumbnail h1').waitFor({ state: 'visible' });
    ////page2 tab handling
    let page2Promise = page.waitForEvent('popup');
    await page.locator('#contact-us h1').click();
    let page2 = await page2Promise;
    await page2.locator('.section_header').waitFor({ state: 'visible' });
    await page2.getByPlaceholder('First Name').fill('Mahesh');
    let page3Promise = page.waitForEvent('popup');
    await page.locator('#button-clicks').click();
    let page3 = await page3Promise;
    await page3.locator('#button1').click();
    await page3.locator('button.btn:visible').click();
    let page4Promise = page.waitForEvent('popup');
    await page.locator('#page-object-model').nth(0).click();
    let page4 = await page4Promise;
    await page4.locator('.nav a').nth(0).waitFor({ state: 'visible' });
    await page4.locator('.nav a').nth(1).click();
    //radio buttons
    await expect(page4.locator('#container-special-offers')).toBeVisible();
    let page5Promise = page.waitForEvent('popup');
    await page.locator('#dropdown-checkboxes-radiobuttons').click();
    let page5 = await page5Promise;
    await page5.locator('#main-header').waitFor({ state: 'visible' });
    await page5.locator('.section-title #dropdowm-menu-1').selectOption('C#');
    await page5.locator('#checkboxes input').nth(0).check();
    await page5.locator('#radio-buttons input').nth(0).check();
    //drag and drop
    let page6Promise = page.waitForEvent('popup');
    await page.locator('#actions').click();
    let page6 = await page6Promise;
    await page6.locator('#div-drag-drop-thumbnail').nth(0).waitFor({ state: 'visible' });
    let source = page6.locator('#div-drag-drop-thumbnail #draggable');
    let target = page6.locator('#div-drag-drop-thumbnail #droppable');
    await source.dragTo(target);
    let page7Promise = page.waitForEvent('popup');
    await page.locator('#scrolling-around').click();
     let page7 = await page7Promise;
    await page7.locator('#zone4').scrollIntoViewIfNeeded();
    await page7.locator('#zone4').hover();
       //popup
    let page8Promise = page.waitForEvent('popup');
    await page.locator('#popup-alerts').click();
    let page8 = await page8Promise;
    await page8.locator('#main-header').waitFor({ state: 'visible' });
    await page8.locator('#button1').click();
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
    await page8.locator('#button2').click();
    await page8.locator('.modal-footer .btn').click();
    page8.on('dialog', async (dialog) => {
        await dialog.dismiss();
    });
    await page8.locator('span#button4').click();
    await expect(page8.locator('p#confirm-alert-text')).toHaveText('You pressed Cancel!');
    //iframe
    let page9Prmise = page.waitForEvent('popup');
    await page.locator('#iframe').click();
    let page9 = await page9Prmise;
    await page9.frameLocator('#frame').locator('.nav a').nth(0).waitFor({ state: 'visible' });
    await expect(page9.frameLocator('#frame').locator('.nav a').nth(0)).toBeVisible();
    //file upload-failing
    let page10Promise = page.waitForEvent('popup');
    await page.locator('#file-upload').click();
    let page10 = await page10Promise;
    await page10.locator('#main-header').waitFor({ state: 'visible' });
    let filePath='TestData/TESTER.pdf';
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page10.locator('#myFile').click({ force: true });
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(filePath);
    await page10.locator('#submit-button').click();
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.pause();

})