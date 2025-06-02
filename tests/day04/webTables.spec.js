import { test, expect } from '@playwright/test';

test('webTable test', async ({ page }) => {
    await page.goto('https://practice.cydeo.com/web-tables');

    let table = page.locator(".SampleTable");
    console.log(await table.allTextContents());
    let rows = await table.locator('tr').all();
    console.log(rows.length);
    let columns = await table.locator('th').all();
    console.log(columns.length);
    let cells = await table.locator('td').all();
    console.log(cells.length);

    for(let cell of cells) {
        console.log(await cell.innerText());
    }
    for (let cell of cells) {
        console.log(await cell.textContent());
    }
});

test('Checkboxes test', async ({ page }) => {
    await page.goto('https://practice.cydeo.com/web-tables');

    let table = page.locator(".SampleTable");
    console.log(await table.allTextContents());
    let checkboxes = await table.locator("[type='checkbox']").all();
    console.log(checkboxes.length);
    for (let checkbox of checkboxes) {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }    
});