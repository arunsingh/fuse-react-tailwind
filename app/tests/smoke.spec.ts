import { test, expect } from '@playwright/test'

test('app loads and shows login', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('text=Sign in')).toBeVisible()
})


