/**
 * Typography Design Tokens
 * 피그마 파운데이션 기반 전체 프로젝트에서 사용할 typography 토큰
 * 
 * 피그마 채널: z4vonxmp
 * 노드 ID: 3459:1422 (Typography 프레임)
 * 업데이트: 2024년 실제 피그마 파운데이션 데이터 기반
 */

// Font Families
export const fontFamily = {
  korean: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  english: 'SUIT Variable, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", sans-serif',
} as const;

// Font Weights
export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

// Font Sizes (Desktop)
export const fontSize = {
  // Web Headlines
  webHeadline01: 48,
  webHeadline02: 36,
  webHeadline03: 28,
  
  // Headlines
  headline01: 24,
  headline02: 22,
  headline03: 20,
  
  // Titles
  title01: 18,
  title02: 16,
  title03: 14,
  
  // Sub Titles
  subTitle01: 14,
  subTitle02: 12,
  
  // Body
  body01: 16,
  body02: 14,
  body03: 12,
  
  // Captions
  caption01: 12,
  caption02: 10,
  caption03: 8,
} as const;

// Font Sizes (Mobile)
export const fontSizeMobile = {
  // Web Headlines
  webHeadline01: 40,
  webHeadline02: 32,
  webHeadline03: 24,
  
  // Headlines
  headline01: 20,
  headline02: 18,
  headline03: 16,
  
  // Titles
  title01: 16,
  title02: 14,
  title03: 12,
  
  // Sub Titles
  subTitle01: 12,
  subTitle02: 10,
  
  // Body
  body01: 14,
  body02: 12,
  body03: 10,
  
  // Captions
  caption01: 10,
  caption02: 8,
  caption03: 6,
} as const;

// Line Heights (Desktop)
export const lineHeight = {
  // Web Headlines
  webHeadline01: 60,
  webHeadline02: 48,
  webHeadline03: 36,
  
  // Headlines
  headline01: 32,
  headline02: 30,
  headline03: 28,
  
  // Titles
  title01: 24,
  title02: 22,
  title03: 20,
  
  // Sub Titles
  subTitle01: 22,
  subTitle02: 18,
  
  // Body
  body01: 24,
  body02: 22,
  body03: 18,
  
  // Captions
  caption01: 14,
  caption02: 12,
  caption03: 10,
} as const;

// Line Heights (Mobile)
export const lineHeightMobile = {
  // Web Headlines
  webHeadline01: 50,
  webHeadline02: 42,
  webHeadline03: 32,
  
  // Headlines
  headline01: 28,
  headline02: 26,
  headline03: 24,
  
  // Titles
  title01: 22,
  title02: 20,
  title03: 18,
  
  // Sub Titles
  subTitle01: 18,
  subTitle02: 16,
  
  // Body
  body01: 22,
  body02: 18,
  body03: 16,
  
  // Captions
  caption01: 12,
  caption02: 10,
  caption03: 8,
} as const;

// Typography Styles (Korean)
export const typography = {
  // Web Headlines
  webHeadline01: {
    fontFamily: fontFamily.korean,
    fontWeight: fontWeight.semibold,
    fontSize: fontSize.webHeadline01,
    lineHeight: lineHeight.webHeadline01,
    fontSizeMobile: fontSizeMobile.webHeadline01,
    lineHeightMobile: lineHeightMobile.webHeadline01,
  },
  webHeadline02: {
    fontFamily: fontFamily.korean,
    fontWeight: fontWeight.semibold,
    fontSize: fontSize.webHeadline02,
    lineHeight: lineHeight.webHeadline02,
    fontSizeMobile: fontSizeMobile.webHeadline02,
    lineHeightMobile: lineHeightMobile.webHeadline02,
  },
  webHeadline03: {
    fontFamily: fontFamily.korean,
    fontWeight: fontWeight.semibold,
    fontSize: fontSize.webHeadline03,
    lineHeight: lineHeight.webHeadline03,
    fontSizeMobile: fontSizeMobile.webHeadline03,
    lineHeightMobile: lineHeightMobile.webHeadline03,
  },
  
  // Headlines
  headline01: {
    fontFamily: fontFamily.korean,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.headline01,
    lineHeight: lineHeight.headline01,
    fontSizeMobile: fontSizeMobile.headline01,
    lineHeightMobile: lineHeightMobile.headline01,
  },
  headline02: {
    fontFamily: fontFamily.korean,
    fontWeight: fontWeight.extrabold,
    fontSize: fontSize.headline02,
    lineHeight: lineHeight.headline02,
    fontSizeMobile: fontSizeMobile.headline02,
    lineHeightMobile: lineHeightMobile.headline02,
  },
  headline03: {
    fontFamily: fontFamily.korean,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.headline03,
    lineHeight: lineHeight.headline03,
    fontSizeMobile: fontSizeMobile.headline03,
    lineHeightMobile: lineHeightMobile.headline03,
  },
  
  // Titles
  title01: {
    fontFamily: fontFamily.korean,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.title01,
    lineHeight: lineHeight.title01,
    fontSizeMobile: fontSizeMobile.title01,
    lineHeightMobile: lineHeightMobile.title01,
  },
  title02: {
    fontFamily: fontFamily.korean,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.title02,
    lineHeight: lineHeight.title02,
    fontSizeMobile: fontSizeMobile.title02,
    lineHeightMobile: lineHeightMobile.title02,
  },
  title03: {
    fontFamily: fontFamily.korean,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.title03,
    lineHeight: lineHeight.title03,
    fontSizeMobile: fontSizeMobile.title03,
    lineHeightMobile: lineHeightMobile.title03,
  },
  
  // Sub Titles
  subTitle01: {
    fontFamily: fontFamily.korean,
    fontWeight: fontWeight.semibold,
    fontSize: fontSize.subTitle01,
    lineHeight: lineHeight.subTitle01,
    fontSizeMobile: fontSizeMobile.subTitle01,
    lineHeightMobile: lineHeightMobile.subTitle01,
  },
  subTitle02: {
    fontFamily: fontFamily.korean,
    fontWeight: fontWeight.semibold,
    fontSize: fontSize.subTitle02,
    lineHeight: lineHeight.subTitle02,
    fontSizeMobile: fontSizeMobile.subTitle02,
    lineHeightMobile: lineHeightMobile.subTitle02,
  },
  
  // Body
  body01: {
    fontFamily: fontFamily.korean,
    fontWeight: fontWeight.medium,
    fontSize: fontSize.body01,
    lineHeight: lineHeight.body01,
    fontSizeMobile: fontSizeMobile.body01,
    lineHeightMobile: lineHeightMobile.body01,
  },
  body02: {
    fontFamily: fontFamily.korean,
    fontWeight: fontWeight.medium,
    fontSize: fontSize.body02,
    lineHeight: lineHeight.body02,
    fontSizeMobile: fontSizeMobile.body02,
    lineHeightMobile: lineHeightMobile.body02,
  },
  body03: {
    fontFamily: fontFamily.korean,
    fontWeight: fontWeight.medium,
    fontSize: fontSize.body03,
    lineHeight: lineHeight.body03,
    fontSizeMobile: fontSizeMobile.body03,
    lineHeightMobile: lineHeightMobile.body03,
  },
  
  // Captions
  caption01: {
    fontFamily: fontFamily.korean,
    fontWeight: fontWeight.semibold,
    fontSize: fontSize.caption01,
    lineHeight: lineHeight.caption01,
    fontSizeMobile: fontSizeMobile.caption01,
    lineHeightMobile: lineHeightMobile.caption01,
  },
  caption02: {
    fontFamily: fontFamily.korean,
    fontWeight: fontWeight.semibold,
    fontSize: fontSize.caption02,
    lineHeight: lineHeight.caption02,
    fontSizeMobile: fontSizeMobile.caption02,
    lineHeightMobile: lineHeightMobile.caption02,
  },
  caption03: {
    fontFamily: fontFamily.korean,
    fontWeight: fontWeight.semibold,
    fontSize: fontSize.caption03,
    lineHeight: lineHeight.caption03,
    fontSizeMobile: fontSizeMobile.caption03,
    lineHeightMobile: lineHeightMobile.caption03,
  },
} as const;

// Typography Styles (English) - SUIT 폰트 사용
export const typographyEn = {
  // Web Headlines
  webHeadline01: {
    fontFamily: fontFamily.english,
    fontWeight: fontWeight.semibold,
    fontSize: fontSize.webHeadline01,
    lineHeight: lineHeight.webHeadline01,
    fontSizeMobile: fontSizeMobile.webHeadline01,
    lineHeightMobile: lineHeightMobile.webHeadline01,
  },
  webHeadline02: {
    fontFamily: fontFamily.english,
    fontWeight: fontWeight.semibold,
    fontSize: fontSize.webHeadline02,
    lineHeight: lineHeight.webHeadline02,
    fontSizeMobile: fontSizeMobile.webHeadline02,
    lineHeightMobile: lineHeightMobile.webHeadline02,
  },
  webHeadline03: {
    fontFamily: fontFamily.english,
    fontWeight: fontWeight.semibold,
    fontSize: fontSize.webHeadline03,
    lineHeight: lineHeight.webHeadline03,
    fontSizeMobile: fontSizeMobile.webHeadline03,
    lineHeightMobile: lineHeightMobile.webHeadline03,
  },
  
  // Headlines
  headline01: {
    fontFamily: fontFamily.english,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.headline01,
    lineHeight: lineHeight.headline01,
    fontSizeMobile: fontSizeMobile.headline01,
    lineHeightMobile: lineHeightMobile.headline01,
  },
  headline02: {
    fontFamily: fontFamily.english,
    fontWeight: fontWeight.extrabold,
    fontSize: fontSize.headline02,
    lineHeight: lineHeight.headline02,
    fontSizeMobile: fontSizeMobile.headline02,
    lineHeightMobile: lineHeightMobile.headline02,
  },
  headline03: {
    fontFamily: fontFamily.english,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.headline03,
    lineHeight: lineHeight.headline03,
    fontSizeMobile: fontSizeMobile.headline03,
    lineHeightMobile: lineHeightMobile.headline03,
  },
  
  // Titles
  title01: {
    fontFamily: fontFamily.english,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.title01,
    lineHeight: lineHeight.title01,
    fontSizeMobile: fontSizeMobile.title01,
    lineHeightMobile: lineHeightMobile.title01,
  },
  title02: {
    fontFamily: fontFamily.english,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.title02,
    lineHeight: lineHeight.title02,
    fontSizeMobile: fontSizeMobile.title02,
    lineHeightMobile: lineHeightMobile.title02,
  },
  title03: {
    fontFamily: fontFamily.english,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.title03,
    lineHeight: lineHeight.title03,
    fontSizeMobile: fontSizeMobile.title03,
    lineHeightMobile: lineHeightMobile.title03,
  },
  
  // Sub Titles
  subTitle01: {
    fontFamily: fontFamily.english,
    fontWeight: fontWeight.semibold,
    fontSize: fontSize.subTitle01,
    lineHeight: lineHeight.subTitle01,
    fontSizeMobile: fontSizeMobile.subTitle01,
    lineHeightMobile: lineHeightMobile.subTitle01,
  },
  subTitle02: {
    fontFamily: fontFamily.english,
    fontWeight: fontWeight.semibold,
    fontSize: fontSize.subTitle02,
    lineHeight: lineHeight.subTitle02,
    fontSizeMobile: fontSizeMobile.subTitle02,
    lineHeightMobile: lineHeightMobile.subTitle02,
  },
  
  // Body
  body01: {
    fontFamily: fontFamily.english,
    fontWeight: fontWeight.medium,
    fontSize: fontSize.body01,
    lineHeight: lineHeight.body01,
    fontSizeMobile: fontSizeMobile.body01,
    lineHeightMobile: lineHeightMobile.body01,
  },
  body02: {
    fontFamily: fontFamily.english,
    fontWeight: fontWeight.medium,
    fontSize: fontSize.body02,
    lineHeight: lineHeight.body02,
    fontSizeMobile: fontSizeMobile.body02,
    lineHeightMobile: lineHeightMobile.body02,
  },
  body03: {
    fontFamily: fontFamily.english,
    fontWeight: fontWeight.medium,
    fontSize: fontSize.body03,
    lineHeight: lineHeight.body03,
    fontSizeMobile: fontSizeMobile.body03,
    lineHeightMobile: lineHeightMobile.body03,
  },
  
  // Captions
  caption01: {
    fontFamily: fontFamily.english,
    fontWeight: fontWeight.semibold,
    fontSize: fontSize.caption01,
    lineHeight: lineHeight.caption01,
    fontSizeMobile: fontSizeMobile.caption01,
    lineHeightMobile: lineHeightMobile.caption01,
  },
  caption02: {
    fontFamily: fontFamily.english,
    fontWeight: fontWeight.semibold,
    fontSize: fontSize.caption02,
    lineHeight: lineHeight.caption02,
    fontSizeMobile: fontSizeMobile.caption02,
    lineHeightMobile: lineHeightMobile.caption02,
  },
  caption03: {
    fontFamily: fontFamily.english,
    fontWeight: fontWeight.semibold,
    fontSize: fontSize.caption03,
    lineHeight: lineHeight.caption03,
    fontSizeMobile: fontSizeMobile.caption03,
    lineHeightMobile: lineHeightMobile.caption03,
  },
} as const;

// CSS Variable Names
export const cssVariables = {
  // Font Families
  '--font-family-korean': fontFamily.korean,
  '--font-family-english': fontFamily.english,
  
  // Font Weights
  '--font-weight-regular': fontWeight.regular,
  '--font-weight-medium': fontWeight.medium,
  '--font-weight-semibold': fontWeight.semibold,
  '--font-weight-bold': fontWeight.bold,
  '--font-weight-extrabold': fontWeight.extrabold,
  
  // Font Sizes (Desktop)
  '--font-size-web-headline-01': `${fontSize.webHeadline01}px`,
  '--font-size-web-headline-02': `${fontSize.webHeadline02}px`,
  '--font-size-web-headline-03': `${fontSize.webHeadline03}px`,
  '--font-size-headline-01': `${fontSize.headline01}px`,
  '--font-size-headline-02': `${fontSize.headline02}px`,
  '--font-size-headline-03': `${fontSize.headline03}px`,
  '--font-size-title-01': `${fontSize.title01}px`,
  '--font-size-title-02': `${fontSize.title02}px`,
  '--font-size-title-03': `${fontSize.title03}px`,
  '--font-size-sub-title-01': `${fontSize.subTitle01}px`,
  '--font-size-sub-title-02': `${fontSize.subTitle02}px`,
  '--font-size-body-01': `${fontSize.body01}px`,
  '--font-size-body-02': `${fontSize.body02}px`,
  '--font-size-body-03': `${fontSize.body03}px`,
  '--font-size-caption-01': `${fontSize.caption01}px`,
  '--font-size-caption-02': `${fontSize.caption02}px`,
  '--font-size-caption-03': `${fontSize.caption03}px`,
  
  // Font Sizes (Mobile)
  '--font-size-mobile-web-headline-01': `${fontSizeMobile.webHeadline01}px`,
  '--font-size-mobile-web-headline-02': `${fontSizeMobile.webHeadline02}px`,
  '--font-size-mobile-web-headline-03': `${fontSizeMobile.webHeadline03}px`,
  '--font-size-mobile-headline-01': `${fontSizeMobile.headline01}px`,
  '--font-size-mobile-headline-02': `${fontSizeMobile.headline02}px`,
  '--font-size-mobile-headline-03': `${fontSizeMobile.headline03}px`,
  '--font-size-mobile-title-01': `${fontSizeMobile.title01}px`,
  '--font-size-mobile-title-02': `${fontSizeMobile.title02}px`,
  '--font-size-mobile-title-03': `${fontSizeMobile.title03}px`,
  '--font-size-mobile-sub-title-01': `${fontSizeMobile.subTitle01}px`,
  '--font-size-mobile-sub-title-02': `${fontSizeMobile.subTitle02}px`,
  '--font-size-mobile-body-01': `${fontSizeMobile.body01}px`,
  '--font-size-mobile-body-02': `${fontSizeMobile.body02}px`,
  '--font-size-mobile-body-03': `${fontSizeMobile.body03}px`,
  '--font-size-mobile-caption-01': `${fontSizeMobile.caption01}px`,
  '--font-size-mobile-caption-02': `${fontSizeMobile.caption02}px`,
  '--font-size-mobile-caption-03': `${fontSizeMobile.caption03}px`,
  
  // Line Heights (Desktop)
  '--line-height-web-headline-01': `${lineHeight.webHeadline01}px`,
  '--line-height-web-headline-02': `${lineHeight.webHeadline02}px`,
  '--line-height-web-headline-03': `${lineHeight.webHeadline03}px`,
  '--line-height-headline-01': `${lineHeight.headline01}px`,
  '--line-height-headline-02': `${lineHeight.headline02}px`,
  '--line-height-headline-03': `${lineHeight.headline03}px`,
  '--line-height-title-01': `${lineHeight.title01}px`,
  '--line-height-title-02': `${lineHeight.title02}px`,
  '--line-height-title-03': `${lineHeight.title03}px`,
  '--line-height-sub-title-01': `${lineHeight.subTitle01}px`,
  '--line-height-sub-title-02': `${lineHeight.subTitle02}px`,
  '--line-height-body-01': `${lineHeight.body01}px`,
  '--line-height-body-02': `${lineHeight.body02}px`,
  '--line-height-body-03': `${lineHeight.body03}px`,
  '--line-height-caption-01': `${lineHeight.caption01}px`,
  '--line-height-caption-02': `${lineHeight.caption02}px`,
  '--line-height-caption-03': `${lineHeight.caption03}px`,
  
  // Line Heights (Mobile)
  '--line-height-mobile-web-headline-01': `${lineHeightMobile.webHeadline01}px`,
  '--line-height-mobile-web-headline-02': `${lineHeightMobile.webHeadline02}px`,
  '--line-height-mobile-web-headline-03': `${lineHeightMobile.webHeadline03}px`,
  '--line-height-mobile-headline-01': `${lineHeightMobile.headline01}px`,
  '--line-height-mobile-headline-02': `${lineHeightMobile.headline02}px`,
  '--line-height-mobile-headline-03': `${lineHeightMobile.headline03}px`,
  '--line-height-mobile-title-01': `${lineHeightMobile.title01}px`,
  '--line-height-mobile-title-02': `${lineHeightMobile.title02}px`,
  '--line-height-mobile-title-03': `${lineHeightMobile.title03}px`,
  '--line-height-mobile-sub-title-01': `${lineHeightMobile.subTitle01}px`,
  '--line-height-mobile-sub-title-02': `${lineHeightMobile.subTitle02}px`,
  '--line-height-mobile-body-01': `${lineHeightMobile.body01}px`,
  '--line-height-mobile-body-02': `${lineHeightMobile.body02}px`,
  '--line-height-mobile-body-03': `${lineHeightMobile.body03}px`,
  '--line-height-mobile-caption-01': `${lineHeightMobile.caption01}px`,
  '--line-height-mobile-caption-02': `${lineHeightMobile.caption02}px`,
  '--line-height-mobile-caption-03': `${lineHeightMobile.caption03}px`,
} as const;

// Typography Token Types
export type TypographyStyle = {
  fontFamily: string;
  fontWeight: number;
  fontSize: number;
  lineHeight: number;
  fontSizeMobile: number;
  lineHeightMobile: number;
};

export type TypographyScale = typeof typography;
export type TypographyEnScale = typeof typographyEn;
export type FontSizeScale = typeof fontSize;
export type FontSizeMobileScale = typeof fontSizeMobile;
export type LineHeightScale = typeof lineHeight;
export type LineHeightMobileScale = typeof lineHeightMobile;

// Utility function for responsive typography
export const getResponsiveTypography = (
  style: TypographyStyle,
  isMobile: boolean = false
) => ({
  fontFamily: style.fontFamily,
  fontWeight: style.fontWeight,
  fontSize: isMobile ? style.fontSizeMobile : style.fontSize,
  lineHeight: isMobile ? style.lineHeightMobile : style.lineHeight,
});

// Utility function for CSS-in-JS
export const getTypographyCSS = (
  style: TypographyStyle,
  isMobile: boolean = false
) => ({
  fontFamily: style.fontFamily,
  fontWeight: style.fontWeight,
  fontSize: isMobile ? `${style.fontSizeMobile}px` : `${style.fontSize}px`,
  lineHeight: isMobile ? `${style.lineHeightMobile}px` : `${style.lineHeight}px`,
});
