/**
 * Emotion Enum
 * 감정 관련 데이터를 관리하는 enum
 * 
 * 요구사항: prompt.103.enum.txt 기반
 * 색상: color.ts의 색상 토큰 활용
 */

import { red, blue, gray, yellow, green } from './color';

// Emotion Type Enum
export enum EmotionType {
  HAPPY = 'happy',
  SAD = 'sad',
  ANGRY = 'angry',
  SURPRISE = 'surprise',
  ETC = 'etc',
}

// Emotion Info Interface
export interface EmotionInfo {
  type: EmotionType;
  displayText: string;
  imageM: string;
  imageS: string;
  color: string;
}

// Emotion Info Mapping
export const emotionInfo: Record<EmotionType, EmotionInfo> = {
  [EmotionType.HAPPY]: {
    type: EmotionType.HAPPY,
    displayText: '행복해요',
    imageM: '/images/emotion-happy-m.png',
    imageS: '/images/emotion-happy-s.png',
    color: red[60], // #850a1b
  },
  [EmotionType.SAD]: {
    type: EmotionType.SAD,
    displayText: '슬퍼요',
    imageM: '/images/emotion-sad-m.png',
    imageS: '/images/emotion-sad-s.png',
    color: blue[60], // #3a5cf3
  },
  [EmotionType.ANGRY]: {
    type: EmotionType.ANGRY,
    displayText: '화나요',
    imageM: '/images/emotion-angry-m.png',
    imageS: '/images/emotion-angry-s.png',
    color: gray[60], // #777777
  },
  [EmotionType.SURPRISE]: {
    type: EmotionType.SURPRISE,
    displayText: '놀랐어요',
    imageM: '/images/emotion-surprise-m.png',
    imageS: '/images/emotion-surprise-s.png',
    color: yellow[60], // #b27d00
  },
  [EmotionType.ETC]: {
    type: EmotionType.ETC,
    displayText: '기타',
    imageM: '/images/emotion-etc-m.png',
    imageS: '/images/emotion-etc-s.png',
    color: green[60], // #084424
  },
} as const;

// Emotion List (순서 보장)
export const emotionList: EmotionInfo[] = [
  emotionInfo[EmotionType.HAPPY],
  emotionInfo[EmotionType.SAD],
  emotionInfo[EmotionType.ANGRY],
  emotionInfo[EmotionType.SURPRISE],
  emotionInfo[EmotionType.ETC],
];

// Utility Functions
/**
 * 감정 타입에 해당하는 감정 정보를 반환합니다.
 * @param type - 감정 타입
 * @returns 감정 정보 객체
 */
export const getEmotionInfo = (type: EmotionType): EmotionInfo => {
  return emotionInfo[type];
};

/**
 * 감정 타입에 해당하는 표시 텍스트를 반환합니다.
 * @param type - 감정 타입
 * @returns 표시 텍스트
 */
export const getEmotionDisplayText = (type: EmotionType): string => {
  return emotionInfo[type].displayText;
};

/**
 * 감정 타입에 해당하는 이미지 경로를 반환합니다.
 * @param type - 감정 타입
 * @param size - 이미지 크기 ('m' 또는 's')
 * @returns 이미지 경로
 */
export const getEmotionImage = (type: EmotionType, size: 'm' | 's' = 'm'): string => {
  const info = emotionInfo[type];
  return size === 'm' ? info.imageM : info.imageS;
};

/**
 * 감정 타입에 해당하는 색상을 반환합니다.
 * @param type - 감정 타입
 * @returns 색상 값
 */
export const getEmotionColor = (type: EmotionType): string => {
  return emotionInfo[type].color;
};

/**
 * 주어진 값이 유효한 감정 타입인지 확인합니다.
 * @param value - 확인할 값
 * @returns 유효한 감정 타입 여부
 */
export const isValidEmotionType = (value: string): value is EmotionType => {
  return Object.values(EmotionType).includes(value as EmotionType);
};

// Type Definitions
export type EmotionTypeKey = keyof typeof EmotionType;
export type EmotionTypeValue = `${EmotionType}`;
