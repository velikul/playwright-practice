import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

    test('File Download', async ({ page }) => {
        let promisedDownloadEvent = page.waitForEvent("download");
        await page.goto('https://practice.cydeo.com/download');
        await page.getByText("asciifull ascii table.gif").click();
        let download = await promisedDownloadEvent;
        let downloadPath = path.join(__dirname,"./downloads", download.suggestedFilename());
        console.log(downloadPath);
        await download.saveAs(downloadPath);
        expect(fs.existsSync(downloadPath)).toBeTruthy();
    }); 

    test('File Upload', async ({ page }) => {
        await page.goto('https://practice.cydeo.com/upload');
        let uploadFilePath = path.join(__dirname, "./uploads","textFile.txt");
        await page.waitForTimeout(3000);
        await page.setInputFiles("#file-upload", uploadFilePath);
        await page.waitForTimeout(3000);
        await page.click("#file-submit")
        await page.waitForTimeout(3000);
        await expect(page.getByText("File Uploaded!")).toBeVisible();
      
    });
