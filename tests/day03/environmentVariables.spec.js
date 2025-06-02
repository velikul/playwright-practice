import { test } from '@playwright/test';

test('Test with environment', async ({ page }) => {

    console.log(process.env.PRACTICE_USERNAME);
    console.log(process.env.PRACTICE_PASSWORD);

});

test('@env_test Test with environment', async ({ page }) => {

    let encodedCredentials = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString('base64');

    await page.setExtraHTTPHeaders({ "Authorization": `Basic ${encodedCredentials}` });

    await page.goto("https://practice.cydeo.com/basic_auth");
    
    await page.waitForTimeout(3000);
});

