import { test } from '@playwright/test';

test.describe('Group 1', () => {

    test.beforeEach(async () => {
        console.log("Before each test");
    });
    test.afterEach(async () => {
        console.log("After each test");
    });
    test.beforeAll(async () => {
        console.log("Before all tests");
    });
    test.afterAll(async () => {
        console.log("After all tests");
    });

    test('1', async ({ page }) => {
        console.log("Number 1");
    });

    test('2', async ({ page }) => {
        console.log("Number 1");

    });

    test('3', async ({ page }) => {
        console.log("Number 1");

    });
});