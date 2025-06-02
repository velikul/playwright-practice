import { test, expect } from '@playwright/test';

test.describe('Mouse', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.cydeo.com/');
        await page.waitForTimeout(3000);
    });

    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(3000);
    });

    test('Left click', async ({ page }) => {
        await page.click("text='A/B Testing'");
    });

    test('Right click', async ({ page }) => {
        await page.click("text='A/B Testing'",{button: "right"});
    });

    test('Hover', async ({ page }) => {

        await page.click("text='Hovers'");
        await page.waitForTimeout(3000);
       //  await page.hover(".figure");
        let hoverItems = await page.locator(".figure").all();
        console.log(hoverItems.length);
        for (let item of hoverItems) {
            await item.hover();
            await page.waitForTimeout(1000);

        }


    });
    test('Scrolling', async ({ page }) => {


    });
    test('Drag and Drop', async ({ page }) => {
        await page.click("text='Drag and Drop'");
        let aItem = page.locator("#column-a");
        let bItem = page.locator("#column-b");
        await page.waitForTimeout(1000);

        await aItem.dragTo(bItem);

        //await page.dragAndDrop("#column-a","#column-b");
        await page.waitForTimeout(1000);


    });
});