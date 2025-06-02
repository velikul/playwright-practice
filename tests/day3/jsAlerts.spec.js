import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.cydeo.com/javascript_alerts');

})

test('regular balert', async ({ page }) => {
    page.on('dialog', async (alert) => {
        await page.waitForTimeout(3000);
        console.log(`Alert Message:${alert.message()}`);
        await alert.accept()
    });

    let alert1Button = page.getByText('Click for JS Alert');
    await alert1Button.click();
    await page.waitForTimeout(3000);


});

test('confrimation alert', async ({ page }) => {
    page.on('dialog', async (dialog) => {
        await page.waitForTimeout(3000);
        console.log(`Alert Message:${dialog.message()}`);
        await dialog.accept();
    });

    let alert2Button = page.getByText('Click for JS Confirm');
    await alert2Button.click();
    await page.waitForTimeout(3000);

});
test('text alert', async ({ page }) => {
    await page.goto('https://practice.cydeo.com');
});