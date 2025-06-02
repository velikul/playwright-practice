import { test, expect } from '@playwright/test';

test('Window popup test', async ({ page }) => {

    let promisedNewEventListener = page.waitForEvent('popup');

    await page.goto('https://practice.cydeo.com/windows');

await page.getByText('Click Here').click();

let newPage = await promisedNewEventListener;

//await page.waitForTimeout(3000);
    console.log(await newPage.title());

expect(await newPage.title()).toContain('Window');
});