import { test, expect } from '@playwright/test';
test.describe('Test Gruoup', () => {

    // create beforeeach navigate to https://practice.cydeo.com 
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.cydeo.com/');
        console.log(await page.title());
       // await expect (page).toHaveTitle("Practice");
        expect(await page.title()).toBe("Practice");
    });

    test('Check', async ({ page }) => {
        //let checkboxesLink = page.locator("text='Checkboxes'");
        let checkboxesLink = page.getByText("Checkboxes");
        await checkboxesLink.click();
        let checkbox1 = page.locator("#box1");
        await checkbox1.check();
        expect(await checkbox1.isChecked()).toBeTruthy();

    });

    test('Uncheck', async ({ page }) => {
        let checkboxesLink = page.getByText("Checkboxes");
        await checkboxesLink.click();
        let checkbox2 = page.locator("#box2");
        await checkbox2.uncheck();
        expect(await checkbox2.isChecked()).toBeFalsy();

    });

    test('Select option', async ({ page }) => {
        let dropdownLink = page.getByText("Dropdown");
        await dropdownLink.click();
        let simpleDropdown = page.locator("#dropdown");
        await simpleDropdown.click();
       // await simpleDropdown.selectOption({index : 1});
       // await simpleDropdown.selectOption({ label: "Option 1" });
        await simpleDropdown.selectOption("1");

    });
});