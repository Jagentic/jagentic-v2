import { test, expect } from '@playwright/test';

test.describe('Navigation & Core Flows', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173/');
    });

    test('Homepage loads and Quiz is visible', async ({ page }) => {
        await expect(page).toHaveTitle(/JAGENTIC/i);
        // Wait for header to ensure page load
        await expect(page.locator('h1')).toContainText('jagentic');
        // Check for Quiz Card
        await expect(page.locator('.backdrop-blur-xl')).toBeVisible();
    });

    test('Navigate to About Page', async ({ page }) => {
        await page.goto('http://localhost:5173/#about');
        await expect(page.locator('text=AI Layer Slayer')).toBeVisible();
        await expect(page.locator('text=Opportunities ⊆ Aggravations')).toBeVisible();
    });

    test('Navigate to Projects Page', async ({ page }) => {
        await page.goto('http://localhost:5173/#projects');
        await expect(page.locator('text=Projects')).toBeVisible();

        // Check CFB Tracker
        await expect(page.locator('text=CFB Tracker')).toBeVisible();
        await expect(page.locator('text=Launch App')).toBeVisible();

        // Check Geo Quiz
        await expect(page.locator('text=Geo Quiz')).toBeVisible();
        await expect(page.locator('video')).toBeVisible();

        // Check WLBS
        await expect(page.locator('text=WLBS.org')).toBeVisible();
        await expect(page.locator('text=Visit Site')).toBeVisible();
    });

    test('Navigate to Contact Page', async ({ page }) => {
        await page.goto('http://localhost:5173/#contact');
        await expect(page.locator('text=Contact')).toBeVisible();
        await expect(page.locator('text=Email Us')).toBeVisible();
    });

    test('Quiz Interaction Flow', async ({ page }) => {
        // Ensure we are on quiz (default)
        await expect(page.getByText(/Question 1 \//)).toBeVisible();

        // Answer first question
        const firstOption = page.locator('button.group').first();
        await firstOption.click();

        // Check for explanation
        await expect(page.getByText('Explanation')).toBeVisible();

        // Click Next
        await page.getByRole('button', { name: 'Next' }).click();

        // Verify Question 2
        await expect(page.getByText(/Question 2 \//)).toBeVisible();
    });
});
