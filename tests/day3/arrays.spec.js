import { test, expect } from '@playwright/test';

test.describe('Arrays', () => {
    // create beforeeach navigate to https://practice.cydeo.com 
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.cydeo.com/');
    });
    test('Verify 50 link within ul tag', async ({ page }) => {

        let links = await page.locator(".list-group>li").all();
        let numberOfLinksArray = links.length;
        console.log("Number of list-group elements: " + numberOfLinksArray);
        expect(numberOfLinksArray).toBe(50);
    });

    test('Verify 50 link within ul tag is visible', async ({ page }) => {

        let links = await page.locator(".list-group>li").all();

        for (let link of links) {
            console.log("Link Text: " + await link.innerText());
            expect(await link.isVisible()).toBeTruthy();
        }
    });
});