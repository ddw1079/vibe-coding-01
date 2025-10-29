import { test, expect } from '@playwright/test';

test.describe('Layout Area 노출 제어', () => {
  test.describe('일기목록 페이지 (/diaries)', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/diaries');
      await page.waitForSelector('[data-testid="layout-header"]');
    });

    test('header 영역이 노출됨', async ({ page }) => {
      const header = page.locator('[data-testid="layout-header"]');
      await expect(header).toBeVisible();
    });

    test('header 내 로고가 노출됨', async ({ page }) => {
      const logo = page.locator('[data-testid="layout-logo"]');
      await expect(logo).toBeVisible();
    });

    test('banner 영역이 노출됨', async ({ page }) => {
      const banner = page.locator('[data-testid="layout-banner"]');
      await expect(banner).toBeVisible();
    });

    test('navigation 영역이 노출됨', async ({ page }) => {
      const navigation = page.locator('[data-testid="layout-navigation"]');
      await expect(navigation).toBeVisible();
    });

    test('footer 영역이 노출됨', async ({ page }) => {
      const footer = page.locator('[data-testid="layout-footer"]');
      await expect(footer).toBeVisible();
    });
  });

  test.describe('일기상세 페이지 (/diaries/[id])', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/diaries/1');
      await page.waitForSelector('[data-testid="layout-header"]');
    });

    test('header 영역이 노출됨', async ({ page }) => {
      const header = page.locator('[data-testid="layout-header"]');
      await expect(header).toBeVisible();
    });

    test('header 내 로고가 노출됨', async ({ page }) => {
      const logo = page.locator('[data-testid="layout-logo"]');
      await expect(logo).toBeVisible();
    });

    test('banner 영역이 노출되지 않음', async ({ page }) => {
      const banner = page.locator('[data-testid="layout-banner"]');
      await expect(banner).toBeHidden();
    });

    test('navigation 영역이 노출되지 않음', async ({ page }) => {
      const navigation = page.locator('[data-testid="layout-navigation"]');
      await expect(navigation).toBeHidden();
    });

    test('footer 영역이 노출됨', async ({ page }) => {
      const footer = page.locator('[data-testid="layout-footer"]');
      await expect(footer).toBeVisible();
    });
  });

  test.describe('로그인 페이지 (/auth/login)', () => {
    test.skip('테스트 제외 대상', () => {});
  });

  test.describe('회원가입 페이지 (/auth/signup)', () => {
    test.skip('테스트 제외 대상', () => {});
  });

  test.describe('사진목록 페이지 (/pictures)', () => {
    test.skip('테스트 제외 대상', () => {});
  });
});

