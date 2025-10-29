'use client';

import { usePathname, useRouter } from 'next/navigation';
import { ROUTES } from '@/commons/constants/url';

// Layout Navigation 훅
export const useLayoutNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  // 현재 경로 기반 활성 상태 판단
  const isDiariesActive = pathname === ROUTES.DIARIES.LIST || pathname.startsWith('/diaries');
  const isPicturesActive = pathname === ROUTES.PICTURES.LIST || pathname.startsWith('/pictures');

  // 페이지 이동 함수
  const navigateToDiaries = () => {
    router.push(ROUTES.DIARIES.LIST);
  };

  const navigateToPictures = () => {
    router.push(ROUTES.PICTURES.LIST);
  };

  return {
    isDiariesActive,
    isPicturesActive,
    navigateToDiaries,
    navigateToPictures,
  };
};

