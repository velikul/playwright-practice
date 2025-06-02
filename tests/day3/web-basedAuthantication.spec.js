import { test, expect } from '@playwright/test';


test('Bypass authentication by embedding the credetial in the URL', async ({ page }) => {

    await page.goto("https://admin:admin@practice.cydeo.com/basic_auth");
});
test('Bypass authentication by encoding the credetial base64 format', async ({ page }) => {

    let encodedCredentials = Buffer.from("admin:admin").toString('base64');
    await page.setExtraHTTPHeaders({ "Authorization": `Basic ${encodedCredentials}` });

    await page.goto("https://practice.cydeo.com/basic_auth");
});

