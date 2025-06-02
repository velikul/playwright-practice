import { test, expect } from '@playwright/test';
test.describe('Test Gruoup', () => {

    // create beforeeach navigate to https://practice.cydeo.com 
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.cydeo.com/');
    });

    test('InnerText', async ({ page }) => {
        let header = page.locator(".h1");
        let actualText = await header.innerText();
        console.log(actualText);

    });

    test('inputValue', async ({ page }) => {
        let input = page.getByText("Inputs");
        await input.click();
        await page.waitForTimeout(3000);

        let inputBox = page.locator("[type='number']");
        await inputBox.fill("123");
        await page.waitForTimeout(3000);
        let inputValue = await inputBox.inputValue();
        console.log(inputValue);
    });

    test('getAttribute', async ({ page }) => {

    });
});