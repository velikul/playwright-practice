import { test } from "@playwright/test";

test('Test1', async ({ page }) => {
    await page.goto("https://www.google.com");
    await page.waitForTimeout(3000)
    await page.locator("#L2AGLb").click();
    await page.waitForTimeout(3000);
    let searchBox = page.locator("[aria-label='Zoek']");
    await searchBox.fill("Anamur");
    await page.waitForTimeout(3000);
    await searchBox.press("Enter");
    await page.waitForTimeout(3000)

})

test('New Test1', async ({ page }) => {
    await page.goto("https://www.playwright.com");
    await page.waitForTimeout(3000)
})