import { test, expect } from '@playwright/test';

test('Quiz Happy Path', async ({ page }) => {
    // 1. Load Homepage
    await page.goto('http://localhost:5173/');

    // 2. Verify Title
    await expect(page).toHaveTitle(/JAGENTIC/i);
    await expect(page.locator('h1')).toContainText('jagentic');

    // 3. Start Quiz (Implicitly starts on load, but let's verify the first question appears)
    const questionCard = page.locator('.backdrop-blur-xl'); // Targeting the card class
    await expect(questionCard).toBeVisible();

    // Verify "Question 1 /" is visible
    await expect(page.getByText(/Question 1 \//)).toBeVisible();

    // 4. Select an option (First option)
    const firstOption = page.locator('button.group').first();
    await firstOption.click();

    // 5. Verify "Explanation" appears
    await expect(page.getByText('Explanation')).toBeVisible();

    // 6. Click "Next"
    const nextButton = page.getByRole('button', { name: 'Next' });
    await expect(nextButton).toBeVisible();
    await nextButton.click();

    // 7. Verify Progress Counter increments to "Question 2 /"
    await expect(page.getByText(/Question 2 \//)).toBeVisible();
});
