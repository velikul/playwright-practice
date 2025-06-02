import { test } from '@playwright/test';

test.describe('Cydeo Practice', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('https://practice.cydeo.com');
    });
    test.afterEach(async ({ page }) => {
    });
   /* test.beforeAll(async () => {
        console.log("Before all tests");
    });
    test.afterAll(async () => {
        console.log("After all tests");
    });
*/
    test('title', async ({ page }) => {
        console.log(await page.title());
    });

    test('url', async ({ page }) => {
        console.log(page.url());

    });
});