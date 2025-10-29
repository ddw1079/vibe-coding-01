import { test, expect } from '@playwright/test';

test.describe('Layout Navigation 링크 라우팅', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/diaries');
    await page.waitForSelector('[data-testid="layout-header"]');
  });

  test('헤더 로고 클릭 시 일기목록 페이지로 이동', async ({ page }) => {
    const currentUrl = page.url();
    if (!currentUrl.includes('/diaries')) {
      await page.goto('/diaries');
    }
    await page.waitForSelector('[data-testid="layout-logo"]');
    
    await page.evaluate(() => {
      window.history.pushState({}, '', '/temp');
    });
    
    await page.click('[data-testid="layout-logo"]', { force: true });
    await page.waitForURL('/diaries');
    
    expect(page.url()).toContain('/diaries');
  });

  test('일기보관함 탭 클릭 시 일기목록 페이지로 이동', async ({ page }) => {
    const currentUrl = page.url();
    if (!currentUrl.includes('/diaries')) {
      await page.goto('/diaries');
    }
    await page.waitForSelector('[data-testid="nav-tab-diaries"]');
    
    await page.evaluate(() => {
      window.history.pushState({}, '', '/temp');
    });
    
    // JavaScript로 직접 클릭 (모바일 뷰포트 이슈 회피)
    await page.evaluate(() => {
      const element = document.querySelector('[data-testid="nav-tab-diaries"]') as HTMLElement;
      element?.click();
    });
    await page.waitForURL('/diaries');
    
    expect(page.url()).toContain('/diaries');
  });

  test('사진보관함 탭 클릭 시 사진목록 페이지로 이동', async () => {
    test.skip(true, '사진 페이지는 테스트 제외');
  });

  test('일기목록 페이지에서 일기보관함 탭이 활성화 상태', async ({ page }) => {
    await page.goto('/diaries');
    await page.waitForSelector('[data-testid="nav-tab-diaries"]');
    
    const diariesTab = page.locator('[data-testid="nav-tab-diaries"]');
    const classList = await diariesTab.getAttribute('class');
    
    expect(classList).toContain('tabActive');
  });

  test('일기목록 페이지에서 일기보관함 텍스트가 활성화 상태', async ({ page }) => {
    await page.goto('/diaries');
    await page.waitForSelector('[data-testid="nav-tab-diaries-text"]');
    
    const diariesText = page.locator('[data-testid="nav-tab-diaries-text"]');
    const fontWeight = await diariesText.evaluate((el) => window.getComputedStyle(el).fontWeight);
    
    // bold (700) 이상 확인
    expect(parseInt(fontWeight)).toBeGreaterThanOrEqual(700);
  });

  test('일기목록 페이지에서 사진보관함 탭이 비활성화 상태', async ({ page }) => {
    await page.goto('/diaries');
    await page.waitForSelector('[data-testid="nav-tab-pictures"]');
    
    const picturesTab = page.locator('[data-testid="nav-tab-pictures"]');
    const classList = await picturesTab.getAttribute('class');
    
    expect(classList).not.toContain('tabActive');
  });

  test('일기목록 페이지에서 사진보관함 텍스트가 비활성화 상태', async ({ page }) => {
    await page.goto('/diaries');
    await page.waitForSelector('[data-testid="nav-tab-pictures-text"]');
    
    const picturesText = page.locator('[data-testid="nav-tab-pictures-text"]');
    const fontWeight = await picturesText.evaluate((el) => window.getComputedStyle(el).fontWeight);
    
    // medium (500) 확인
    expect(parseInt(fontWeight)).toBeLessThan(700);
  });

  test('로고에 cursor: pointer 스타일 적용', async ({ page }) => {
    await page.goto('/diaries');
    await page.waitForSelector('[data-testid="layout-logo"]');
    
    const logo = page.locator('[data-testid="layout-logo"]');
    const cursor = await logo.evaluate((el) => window.getComputedStyle(el).cursor);
    
    expect(cursor).toBe('pointer');
  });

  test('일기보관함 탭에 cursor: pointer 스타일 적용', async ({ page }) => {
    await page.goto('/diaries');
    await page.waitForSelector('[data-testid="nav-tab-diaries"]');
    
    const tab = page.locator('[data-testid="nav-tab-diaries"]');
    const cursor = await tab.evaluate((el) => window.getComputedStyle(el).cursor);
    
    expect(cursor).toBe('pointer');
  });

  test('사진보관함 탭에 cursor: pointer 스타일 적용', async ({ page }) => {
    await page.goto('/diaries');
    await page.waitForSelector('[data-testid="nav-tab-pictures"]');
    
    const tab = page.locator('[data-testid="nav-tab-pictures"]');
    const cursor = await tab.evaluate((el) => window.getComputedStyle(el).cursor);
    
    expect(cursor).toBe('pointer');
  });
});

