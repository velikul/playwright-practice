import { test, expect } from '@playwright/test';

test('iFrame test', async ({ page }) => {
    await page.goto('https://practice.cydeo.com/iframe');

    let iFrame1 = page.frameLocator("#mce_0_ifr");
    let textBody = iFrame1.locator('#tinymce');
    //await textBody.press("Control+A","Backspace");
    //await textBody.clear();
    // If you use type you should first delete and then write. 
    // Using fill delete all text first.
    await textBody.fill('Hello, iFrame!');
    await page.waitForTimeout(1000);
    await expect(textBody).toHaveText('Hello, iFrame!')
});