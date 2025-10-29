import { test, expect } from '@playwright/test';

test.describe('Diaries Modal Link Hook', () => {
  test.beforeEach(async ({ page }) => {
    // /diaries 페이지로 이동
    await page.goto('/diaries');
    
    // 페이지 로드 완료 대기 (data-testid 기반)
    await page.waitForSelector('[data-testid="diaries-container"]');
  });

  test('일기쓰기 버튼을 클릭하면 모달이 열린다', async ({ page }) => {
    // 일기쓰기 버튼 찾기
    const writeButton = page.locator('[data-testid="write-diary-button"]');
    await expect(writeButton).toBeVisible();
    
    // 모달이 닫혀있는지 확인
    await expect(page.locator('[data-testid="diary-modal"]')).not.toBeVisible();
    
    // 일기쓰기 버튼 클릭
    await writeButton.click();
    
    // 모달이 열렸는지 확인
    await expect(page.locator('[data-testid="diary-modal"]')).toBeVisible();
  });

  test('모달이 페이지 중앙에 오버레이로 표시된다', async ({ page }) => {
    // 일기쓰기 버튼 클릭
    await page.locator('[data-testid="write-diary-button"]').click();
    
    // 모달 컨테이너 확인
    const modalContainer = page.locator('[data-testid="diary-modal"]');
    await expect(modalContainer).toBeVisible();
    
    // 모달이 fixed position으로 중앙에 위치하는지 확인
    const modalWrapper = page.locator('.fixed.inset-0.z-50.flex.items-center.justify-center');
    await expect(modalWrapper).toBeVisible();
    
    // 배경 오버레이 확인
    const overlay = page.locator('.fixed.inset-0.z-50 > .absolute.inset-0');
    await expect(overlay).toBeVisible();
  });

  test('모달의 제목이 "일기 쓰기"로 표시된다', async ({ page }) => {
    // 일기쓰기 버튼 클릭
    await page.locator('[data-testid="write-diary-button"]').click();
    
    // 모달 제목 확인
    const modalTitle = page.locator('[data-testid="diary-modal-title"]');
    await expect(modalTitle).toBeVisible();
    await expect(modalTitle).toHaveText('일기 쓰기');
  });

  test('모달의 닫기 버튼을 클릭하면 모달이 닫힌다', async ({ page }) => {
    // 일기쓰기 버튼 클릭
    await page.locator('[data-testid="write-diary-button"]').click();
    
    // 모달이 열렸는지 확인
    await expect(page.locator('[data-testid="diary-modal"]')).toBeVisible();
    
    // 닫기 버튼 클릭
    await page.locator('[data-testid="diary-modal-close"]').click();
    
    // 모달이 닫혔는지 확인
    await expect(page.locator('[data-testid="diary-modal"]')).not.toBeVisible();
  });

  test('ESC 키를 누르면 모달이 닫힌다', async ({ page }) => {
    // 일기쓰기 버튼 클릭
    await page.locator('[data-testid="write-diary-button"]').click();
    
    // 모달이 열렸는지 확인
    await expect(page.locator('[data-testid="diary-modal"]')).toBeVisible();
    
    // ESC 키 누르기
    await page.keyboard.press('Escape');
    
    // 모달이 닫혔는지 확인
    await expect(page.locator('[data-testid="diary-modal"]')).not.toBeVisible();
  });

  test('배경 오버레이를 클릭하면 모달이 닫힌다', async ({ page }) => {
    // 일기쓰기 버튼 클릭
    await page.locator('[data-testid="write-diary-button"]').click();
    
    // 모달이 열렸는지 확인
    await expect(page.locator('[data-testid="diary-modal"]')).toBeVisible();
    
    // 배경 오버레이 클릭 (모달 외부 클릭)
    const modalWrapper = page.locator('.fixed.inset-0.z-50.flex.items-center.justify-center');
    await modalWrapper.click({ position: { x: 10, y: 10 } });
    
    // 모달이 닫혔는지 확인
    await expect(page.locator('[data-testid="diary-modal"]')).not.toBeVisible();
  });
});

