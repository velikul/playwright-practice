import { test, expect } from '@playwright/test';

test.describe('Assertion', () => {
    // create beforeeach navigate to https://practice.cydeo.com 
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.cydeo.com/');
    });
    test('Verify checked', async ({ page }) => {
        let checkboxesLink = page.getByText("Checkboxes");
        await checkboxesLink.click();
        let checkbox1 = page.locator("#box1");
        await checkbox1.check();
        expect(await checkbox1.isChecked()).toBeTruthy();

    });
});