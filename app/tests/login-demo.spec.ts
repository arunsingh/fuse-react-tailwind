import { test, expect } from '@playwright/test'

test('demo login to dashboard', async ({ page }) => {
  await page.goto('http://localhost:5173/login')
  await page.getByLabel('Email').fill('arun@example.com')
  await page.getByLabel('Password').fill('password')
  await page.getByRole('button', { name: 'Sign in' }).click()
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({ timeout: 15000 })
})


