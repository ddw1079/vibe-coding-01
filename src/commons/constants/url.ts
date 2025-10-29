/**
 * URL Constants
 * 프로젝트 전체에서 사용하는 URL 경로 및 페이지 설정 관리
 * 
 * 요구사항: prompt.104.url.txt 기반
 * - 다이나믹 라우팅 지원
 * - 링크 이동 시 사용 가능하도록 설계
 * - 각 페이지별 레이아웃 요소 표시 여부 관리
 */

// 접근 권한 타입
export enum AccessLevel {
  PUBLIC = 'public',        // 누구나 접근 가능
  MEMBER_ONLY = 'memberOnly', // 회원 전용
}

// 레이아웃 구성 요소 표시 설정
export interface LayoutConfig {
  header: {
    visible: boolean;
    logo: boolean;
    darkModeToggle: boolean;
  };
  banner: boolean;
  navigation: boolean;
  footer: boolean;
}

// 페이지 메타 정보
export interface PageInfo {
  path: string;
  accessLevel: AccessLevel;
  layout: LayoutConfig;
  isDynamic?: boolean; // 다이나믹 라우팅 여부
}

// URL 경로 상수
export const ROUTES = {
  // 인증 관련
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
  },
  // 일기 관련
  DIARIES: {
    LIST: '/diaries',
    DETAIL: (id: string | number) => `/diaries/${id}`,
    DETAIL_PATH: '/diaries/[id]', // 동적 경로 패턴
  },
  // 사진 관련
  PICTURES: {
    LIST: '/pictures',
  },
} as const;

// 페이지별 설정 정보
export const PAGE_CONFIG: Record<string, PageInfo> = {
  // 로그인
  LOGIN: {
    path: ROUTES.AUTH.LOGIN,
    accessLevel: AccessLevel.PUBLIC,
    layout: {
      header: {
        visible: false,
        logo: false,
        darkModeToggle: false,
      },
      banner: false,
      navigation: false,
      footer: false,
    },
  },
  
  // 회원가입
  SIGNUP: {
    path: ROUTES.AUTH.SIGNUP,
    accessLevel: AccessLevel.PUBLIC,
    layout: {
      header: {
        visible: false,
        logo: false,
        darkModeToggle: false,
      },
      banner: false,
      navigation: false,
      footer: false,
    },
  },
  
  // 일기 목록
  DIARIES_LIST: {
    path: ROUTES.DIARIES.LIST,
    accessLevel: AccessLevel.PUBLIC,
    layout: {
      header: {
        visible: true,
        logo: true,
        darkModeToggle: false,
      },
      banner: true,
      navigation: true,
      footer: true,
    },
  },
  
  // 일기 상세
  DIARIES_DETAIL: {
    path: ROUTES.DIARIES.DETAIL_PATH,
    accessLevel: AccessLevel.MEMBER_ONLY,
    isDynamic: true,
    layout: {
      header: {
        visible: true,
        logo: true,
        darkModeToggle: false,
      },
      banner: false,
      navigation: false,
      footer: true,
    },
  },
  
  // 사진 목록
  PICTURES_LIST: {
    path: ROUTES.PICTURES.LIST,
    accessLevel: AccessLevel.PUBLIC,
    layout: {
      header: {
        visible: true,
        logo: true,
        darkModeToggle: false,
      },
      banner: true,
      navigation: true,
      footer: true,
    },
  },
} as const;

// Utility Functions

/**
 * 주어진 경로에 해당하는 페이지 설정을 반환합니다.
 * @param path - 페이지 경로
 * @returns 페이지 설정 정보 또는 undefined
 */
export const getPageConfig = (path: string): PageInfo | undefined => {
  // 정확한 경로 매칭
  const exactMatch = Object.values(PAGE_CONFIG).find(
    (config) => config.path === path
  );
  if (exactMatch) return exactMatch;
  
  // 동적 경로 매칭 (예: /diaries/123 -> /diaries/[id])
  const dynamicMatch = Object.values(PAGE_CONFIG).find((config) => {
    if (!config.isDynamic) return false;
    const pattern = config.path.replace(/\[.*?\]/g, '[^/]+');
    const regex = new RegExp(`^${pattern}$`);
    return regex.test(path);
  });
  
  return dynamicMatch;
};

/**
 * 주어진 경로가 회원 전용 페이지인지 확인합니다.
 * @param path - 페이지 경로
 * @returns 회원 전용 여부
 */
export const isMemberOnlyPage = (path: string): boolean => {
  const config = getPageConfig(path);
  return config?.accessLevel === AccessLevel.MEMBER_ONLY;
};

/**
 * 주어진 경로의 레이아웃 설정을 반환합니다.
 * @param path - 페이지 경로
 * @returns 레이아웃 설정 또는 기본 레이아웃
 */
export const getLayoutConfig = (path: string): LayoutConfig => {
  const config = getPageConfig(path);
  return config?.layout || {
    header: {
      visible: true,
      logo: true,
      darkModeToggle: false,
    },
    banner: true,
    navigation: true,
    footer: true,
  };
};

/**
 * 일기 상세 페이지 URL을 생성합니다.
 * @param id - 일기 ID
 * @returns 일기 상세 페이지 URL
 */
export const getDiaryDetailUrl = (id: string | number): string => {
  return ROUTES.DIARIES.DETAIL(id);
};

/**
 * 주어진 경로가 유효한 라우트인지 확인합니다.
 * @param path - 확인할 경로
 * @returns 유효한 라우트 여부
 */
export const isValidRoute = (path: string): boolean => {
  return getPageConfig(path) !== undefined;
};

/**
 * 모든 공개 페이지 경로 목록을 반환합니다.
 * @returns 공개 페이지 경로 배열
 */
export const getPublicRoutes = (): string[] => {
  return Object.values(PAGE_CONFIG)
    .filter((config) => config.accessLevel === AccessLevel.PUBLIC)
    .map((config) => config.path);
};

/**
 * 모든 회원 전용 페이지 경로 목록을 반환합니다.
 * @returns 회원 전용 페이지 경로 배열
 */
export const getMemberOnlyRoutes = (): string[] => {
  return Object.values(PAGE_CONFIG)
    .filter((config) => config.accessLevel === AccessLevel.MEMBER_ONLY)
    .map((config) => config.path);
};

// Type Definitions
export type RouteKey = keyof typeof ROUTES;
export type PageConfigKey = keyof typeof PAGE_CONFIG;

