import { test, expect } from '@playwright/test';

test('пустая форма показывает ошибки email и пароля', async ({ page }) => {
  // TODO 1: откройте главную страницу Testboard через page.goto('/').
  await page.goto('/')
  // TODO 2: найдите кнопку входа и откройте форму.
  await page.locator('[data-marker="login-button-desktop"]').click()
  // TODO 3: отправьте форму с пустыми email и паролем.
  await page.locator('[data-marker="login-submit-button"]').click()
  // TODO 4: через expect проверьте текст «Email обязателен».
  const emailError = page.locator('[data-marker="email-error"]')
  await expect(emailError).toHaveText('Email обязателен')
  // TODO 5: через expect проверьте текст «Пароль обязателен».
  const passwordError = page.locator('[data-marker="password-error"]')
  await expect(passwordError).toHaveText('Пароль обязателен')
});
