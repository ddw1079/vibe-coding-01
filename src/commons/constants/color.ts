/**
 * Color Design Tokens
 * 피그마 파운데이션 기반 다크모드를 포함한 전체 프로젝트에서 사용할 color 토큰
 * 
 * 피그마 노드 ID: 3459:1131
 * 채널: 6l8944n5
 */

// Primary Colors (피그마 기반)
export const primary = {
  50: '#f0f7ff',   // Title 배경색
  100: '#e0f2fe',
  200: '#bae6fd',
  300: '#7dd3fc',
  400: '#38bdf8',
  500: '#0ea5e9',
  600: '#0284c7',
  700: '#0369a1',
  800: '#075985',
  900: '#0c4a6e',
  950: '#082f49',
} as const;

// Secondary Colors
export const secondary = {
  50: '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5e1',
  400: '#94a3b8',
  500: '#64748b',
  600: '#475569',
  700: '#334155',
  800: '#1e293b',
  900: '#0f172a',
  950: '#020617',
} as const;

// Neutral Colors
export const neutral = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#e5e5e5',
  300: '#d4d4d4',
  400: '#a3a3a3',
  500: '#737373',
  600: '#525252',
  700: '#404040',
  800: '#262626',
  900: '#171717',
  950: '#0a0a0a',
} as const;

// Semantic Colors (피그마 기반)
export const semantic = {
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#12b75f',   // Mobile chip 색상
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#ffb300',   // Web chip 색상
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
  info: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
} as const;

// Light Theme Colors (피그마 기반)
export const light = {
  background: {
    primary: '#ffffff',    // 피그마 페이지 배경
    secondary: '#f0f7ff',  // 피그마 Title 배경
    tertiary: neutral[200],
  },
  foreground: {
    primary: '#000000',    // 피그마 텍스트 색상
    secondary: '#777777',  // 피그마 Component 텍스트 색상
    tertiary: neutral[500],
    muted: neutral[400],
  },
  border: {
    primary: neutral[200],
    secondary: neutral[300],
    focus: primary[500],
  },
  surface: {
    primary: '#ffffff',    // 피그마 페이지 배경
    secondary: '#f0f7ff',  // 피그마 Title 배경
    tertiary: neutral[100],
  },
} as const;

// Dark Theme Colors
export const dark = {
  background: {
    primary: neutral[950],
    secondary: neutral[900],
    tertiary: neutral[800],
  },
  foreground: {
    primary: neutral[50],
    secondary: neutral[200],
    tertiary: neutral[400],
    muted: neutral[500],
  },
  border: {
    primary: neutral[800],
    secondary: neutral[700],
    focus: primary[400],
  },
  surface: {
    primary: neutral[900],
    secondary: neutral[800],
    tertiary: neutral[700],
  },
} as const;

// Color Token Types
export type ColorScale = typeof primary;
export type SemanticColor = typeof semantic;
export type ThemeColor = typeof light | typeof dark;

// Utility function for getting color with opacity
export const withOpacity = (color: string, opacity: number): string => {
  // Convert hex to RGB and add opacity
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// CSS Variable Names
export const cssVariables = {
  // Primary (피그마 기반)
  '--color-primary-50': primary[50],  // #f0f7ff - Title 배경색
  '--color-primary-100': primary[100],
  '--color-primary-200': primary[200],
  '--color-primary-300': primary[300],
  '--color-primary-400': primary[400],
  '--color-primary-500': primary[500],
  '--color-primary-600': primary[600],
  '--color-primary-700': primary[700],
  '--color-primary-800': primary[800],
  '--color-primary-900': primary[900],
  '--color-primary-950': primary[950],
  
  // Secondary
  '--color-secondary-50': secondary[50],
  '--color-secondary-100': secondary[100],
  '--color-secondary-200': secondary[200],
  '--color-secondary-300': secondary[300],
  '--color-secondary-400': secondary[400],
  '--color-secondary-500': secondary[500],
  '--color-secondary-600': secondary[600],
  '--color-secondary-700': secondary[700],
  '--color-secondary-800': secondary[800],
  '--color-secondary-900': secondary[900],
  '--color-secondary-950': secondary[950],
  
  // Neutral
  '--color-neutral-50': neutral[50],
  '--color-neutral-100': neutral[100],
  '--color-neutral-200': neutral[200],
  '--color-neutral-300': neutral[300],
  '--color-neutral-400': neutral[400],
  '--color-neutral-500': neutral[500],
  '--color-neutral-600': neutral[600],
  '--color-neutral-700': neutral[700],
  '--color-neutral-800': neutral[800],
  '--color-neutral-900': neutral[900],
  '--color-neutral-950': neutral[950],
  
  // Semantic - Success
  '--color-success-50': semantic.success[50],
  '--color-success-100': semantic.success[100],
  '--color-success-200': semantic.success[200],
  '--color-success-300': semantic.success[300],
  '--color-success-400': semantic.success[400],
  '--color-success-500': semantic.success[500],
  '--color-success-600': semantic.success[600],
  '--color-success-700': semantic.success[700],
  '--color-success-800': semantic.success[800],
  '--color-success-900': semantic.success[900],
  '--color-success-950': semantic.success[950],
  
  // Semantic - Warning
  '--color-warning-50': semantic.warning[50],
  '--color-warning-100': semantic.warning[100],
  '--color-warning-200': semantic.warning[200],
  '--color-warning-300': semantic.warning[300],
  '--color-warning-400': semantic.warning[400],
  '--color-warning-500': semantic.warning[500],
  '--color-warning-600': semantic.warning[600],
  '--color-warning-700': semantic.warning[700],
  '--color-warning-800': semantic.warning[800],
  '--color-warning-900': semantic.warning[900],
  '--color-warning-950': semantic.warning[950],
  
  // Semantic - Error
  '--color-error-50': semantic.error[50],
  '--color-error-100': semantic.error[100],
  '--color-error-200': semantic.error[200],
  '--color-error-300': semantic.error[300],
  '--color-error-400': semantic.error[400],
  '--color-error-500': semantic.error[500],
  '--color-error-600': semantic.error[600],
  '--color-error-700': semantic.error[700],
  '--color-error-800': semantic.error[800],
  '--color-error-900': semantic.error[900],
  '--color-error-950': semantic.error[950],
  
  // Semantic - Info
  '--color-info-50': semantic.info[50],
  '--color-info-100': semantic.info[100],
  '--color-info-200': semantic.info[200],
  '--color-info-300': semantic.info[300],
  '--color-info-400': semantic.info[400],
  '--color-info-500': semantic.info[500],
  '--color-info-600': semantic.info[600],
  '--color-info-700': semantic.info[700],
  '--color-info-800': semantic.info[800],
  '--color-info-900': semantic.info[900],
  '--color-info-950': semantic.info[950],
} as const;

