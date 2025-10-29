'use client';

import { usePathname } from 'next/navigation';
import { getLayoutConfig } from '@/commons/constants/url';

// Layout Area 노출 제어 훅
export const useLayoutArea = () => {
  const pathname = usePathname();
  
  // 현재 경로에 해당하는 레이아웃 설정 가져오기
  const layoutConfig = getLayoutConfig(pathname);

  return {
    isHeaderVisible: layoutConfig.header.visible,
    isLogoVisible: layoutConfig.header.logo,
    isDarkModeToggleVisible: layoutConfig.header.darkModeToggle,
    isBannerVisible: layoutConfig.banner,
    isNavigationVisible: layoutConfig.navigation,
    isFooterVisible: layoutConfig.footer,
  };
};

