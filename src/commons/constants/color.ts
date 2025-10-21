/**
 * Color Design Tokens
 * 피그마 파운데이션 기반 다크모드를 포함한 전체 프로젝트에서 사용할 color 토큰
 * 
 * 피그마 채널: 5ndqnncc
 * 노드 ID: 3459:1130 (Color 프레임)
 * 업데이트: 2024년 실제 피그마 파운데이션 데이터 기반
 */

// Blue Color Palette (피그마 Blue 수정 231107)
export const blue = {
  5: '#f0f7ff',   // Blue/05
  10: '#dbeeff',  // Blue/10
  20: '#bddbff',  // Blue/20
  30: '#93beff',  // Blue/30
  40: '#6da5fa',  // Blue/40 (System color)
  50: '#497cff',  // Blue/50
  60: '#3a5cf3',  // Blue/60 (System color)
  70: '#274ae1',  // Blue/70
  80: '#1530a6',  // Blue/80
  90: '#0b2184',  // Blue/90
} as const;

// Gray Color Palette (피그마 Gray)
export const gray = {
  white: '#ffffff',  // Gray/White
  5: '#f2f2f2',      // Gray/05
  10: '#e4e4e4',     // Gray/10
  20: '#d4d3d3',     // Gray/20
  30: '#c7c7c7',     // Gray/30
  40: '#ababab',     // Gray/40
  50: '#919191',     // Gray/50
  60: '#777777',     // Gray/60
  70: '#5f5f5f',     // Gray/70
  80: '#333333',     // Gray/80
  90: '#1c1c1c',     // Gray/90
  black: '#000000',  // Gray/Black
} as const;

// Red Color Palette (피그마 Red)
export const red = {
  5: '#fdd7dc',   // Red/05
  10: '#f797a4',  // Red/10
  20: '#f4677a',  // Red/20
  30: '#f03851',  // Red/30 (Error color)
  40: '#e4112e',  // Red/40
  50: '#b40e24',  // Red/50
  60: '#850a1b',  // Red/60
} as const;

// Green Color Palette (피그마 Green)
export const green = {
  5: '#d3f3e0',   // Green/05
  10: '#92e6b9',  // Green/10
  20: '#15d66f',  // Green/20
  30: '#12b75f',  // Green/30 (Success color)
  40: '#109c51',  // Green/40
  50: '#0e723c',  // Green/50
  60: '#084424',  // Green/60
} as const;

// Yellow Color Palette (피그마 Yellow)
export const yellow = {
  5: '#ffe499',   // Yellow/05
  10: '#ffd666',  // Yellow/10
  20: '#ffc933',  // Yellow/20
  30: '#ffb300',  // Yellow/30
  40: '#eba500',  // Yellow/40
  50: '#d69600',  // Yellow/50
  60: '#b27d00',  // Yellow/60
} as const;

// Cool Gray Color Palette (피그마 Cool gray)
export const coolGray = {
  5: '#f8f8fa',   // Cool gray/05
  10: '#f6f6f9',  // Cool gray/10
  20: '#edeef2',  // Cool gray/20
  30: '#dddfe5',  // Cool gray/30
  40: '#c7c9d5',  // Cool gray/40
  50: '#bbbecd',  // Cool gray/50
  60: '#b0b3c4',  // Cool gray/60
} as const;

// Primary Colors (Blue 기반)
export const primary = {
  50: blue[5],    // #f0f7ff
  100: blue[10],  // #dbeeff
  200: blue[20],  // #bddbff
  300: blue[30],  // #93beff
  400: blue[40],  // #6da5fa
  500: blue[50],  // #497cff
  600: blue[60],  // #3a5cf3
  700: blue[70],  // #274ae1
  800: blue[80],  // #1530a6
  900: blue[90],  // #0b2184
  950: '#082f49', // 추가 다크 톤
} as const;

// Secondary Colors (Cool Gray 기반)
export const secondary = {
  50: coolGray[5],   // #f8f8fa
  100: coolGray[10], // #f6f6f9
  200: coolGray[20], // #edeef2
  300: coolGray[30], // #dddfe5
  400: coolGray[40], // #c7c9d5
  500: coolGray[50], // #bbbecd
  600: coolGray[60], // #b0b3c4
  700: gray[70],     // #5f5f5f
  800: gray[80],     // #333333
  900: gray[90],     // #1c1c1c
  950: gray.black,   // #000000
} as const;

// Neutral Colors (Gray 기반)
export const neutral = {
  50: gray.white,  // #ffffff
  100: gray[5],    // #f2f2f2
  200: gray[10],   // #e4e4e4
  300: gray[20],   // #d4d3d3
  400: gray[30],   // #c7c7c7
  500: gray[40],   // #ababab
  600: gray[50],   // #919191
  700: gray[60],   // #777777
  800: gray[70],   // #5f5f5f
  900: gray[80],   // #333333
  950: gray.black, // #000000
} as const;

// Semantic Colors (피그마 기반)
export const semantic = {
  success: {
    50: green[5],   // #d3f3e0
    100: green[10], // #92e6b9
    200: green[20], // #15d66f
    300: green[30], // #12b75f (Success color)
    400: green[40], // #109c51
    500: green[50], // #0e723c
    600: green[60], // #084424
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  warning: {
    50: yellow[5],   // #ffe499
    100: yellow[10], // #ffd666
    200: yellow[20], // #ffc933
    300: yellow[30], // #ffb300
    400: yellow[40], // #eba500
    500: yellow[50], // #d69600
    600: yellow[60], // #b27d00
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },
  error: {
    50: red[5],   // #fdd7dc
    100: red[10], // #f797a4
    200: red[20], // #f4677a
    300: red[30], // #f03851 (Error color)
    400: red[40], // #e4112e
    500: red[50], // #b40e24
    600: red[60], // #850a1b
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
  info: {
    50: blue[5],   // #f0f7ff
    100: blue[10], // #dbeeff
    200: blue[20], // #bddbff
    300: blue[30], // #93beff
    400: blue[40], // #6da5fa
    500: blue[50], // #497cff
    600: blue[60], // #3a5cf3
    700: blue[70], // #274ae1
    800: blue[80], // #1530a6
    900: blue[90], // #0b2184
    950: '#172554',
  },
} as const;

// Light Theme Colors (피그마 기반)
export const light = {
  background: {
    primary: gray.white,   // #ffffff
    secondary: blue[5],    // #f0f7ff
    tertiary: gray[5],     // #f2f2f2
  },
  foreground: {
    primary: gray.black,   // #000000
    secondary: gray[60],   // #777777
    tertiary: gray[50],    // #919191
    muted: gray[40],       // #ababab
  },
  border: {
    primary: gray[10],     // #e4e4e4
    secondary: gray[20],   // #d4d3d3
    focus: blue[50],       // #497cff
  },
  surface: {
    primary: gray.white,   // #ffffff
    secondary: blue[5],    // #f0f7ff
    tertiary: gray[5],     // #f2f2f2
  },
} as const;

// Dark Theme Colors
export const dark = {
  background: {
    primary: gray.black,   // #000000
    secondary: gray[90],   // #1c1c1c
    tertiary: gray[80],    // #333333
  },
  foreground: {
    primary: gray.white,   // #ffffff
    secondary: gray[20],   // #d4d3d3
    tertiary: gray[40],    // #ababab
    muted: gray[50],       // #919191
  },
  border: {
    primary: gray[80],     // #333333
    secondary: gray[70],   // #5f5f5f
    focus: blue[40],       // #6da5fa
  },
  surface: {
    primary: gray[90],     // #1c1c1c
    secondary: gray[80],   // #333333
    tertiary: gray[70],    // #5f5f5f
  },
} as const;

// Gradient Colors (피그마 기반)
export const gradients = {
  primary: {
    from: blue[40],  // #6da5fa
    to: '#92eaf5',   // 피그마 그라데이션 색상
  },
  skeleton: {
    from: 'rgba(255, 255, 255, 0)',
    via: 'rgba(255, 255, 255, 0.6)',
    to: 'rgba(255, 255, 255, 0)',
  },
} as const;

// Color Token Types
export type ColorScale = typeof primary;
export type SemanticColor = typeof semantic;
export type ThemeColor = typeof light | typeof dark;
export type GradientColor = typeof gradients;

// Utility function for getting color with opacity
export const withOpacity = (color: string, opacity: number): string => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// CSS Variable Names (피그마 기반)
export const cssVariables = {
  // Blue Colors
  '--color-blue-5': blue[5],
  '--color-blue-10': blue[10],
  '--color-blue-20': blue[20],
  '--color-blue-30': blue[30],
  '--color-blue-40': blue[40],
  '--color-blue-50': blue[50],
  '--color-blue-60': blue[60],
  '--color-blue-70': blue[70],
  '--color-blue-80': blue[80],
  '--color-blue-90': blue[90],
  
  // Gray Colors
  '--color-gray-white': gray.white,
  '--color-gray-5': gray[5],
  '--color-gray-10': gray[10],
  '--color-gray-20': gray[20],
  '--color-gray-30': gray[30],
  '--color-gray-40': gray[40],
  '--color-gray-50': gray[50],
  '--color-gray-60': gray[60],
  '--color-gray-70': gray[70],
  '--color-gray-80': gray[80],
  '--color-gray-90': gray[90],
  '--color-gray-black': gray.black,
  
  // Red Colors
  '--color-red-5': red[5],
  '--color-red-10': red[10],
  '--color-red-20': red[20],
  '--color-red-30': red[30],
  '--color-red-40': red[40],
  '--color-red-50': red[50],
  '--color-red-60': red[60],
  
  // Green Colors
  '--color-green-5': green[5],
  '--color-green-10': green[10],
  '--color-green-20': green[20],
  '--color-green-30': green[30],
  '--color-green-40': green[40],
  '--color-green-50': green[50],
  '--color-green-60': green[60],
  
  // Yellow Colors
  '--color-yellow-5': yellow[5],
  '--color-yellow-10': yellow[10],
  '--color-yellow-20': yellow[20],
  '--color-yellow-30': yellow[30],
  '--color-yellow-40': yellow[40],
  '--color-yellow-50': yellow[50],
  '--color-yellow-60': yellow[60],
  
  // Cool Gray Colors
  '--color-cool-gray-5': coolGray[5],
  '--color-cool-gray-10': coolGray[10],
  '--color-cool-gray-20': coolGray[20],
  '--color-cool-gray-30': coolGray[30],
  '--color-cool-gray-40': coolGray[40],
  '--color-cool-gray-50': coolGray[50],
  '--color-cool-gray-60': coolGray[60],
  
  // Primary Colors
  '--color-primary-50': primary[50],
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
  
  // Secondary Colors
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
  
  // Neutral Colors
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