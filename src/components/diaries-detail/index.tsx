'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/commons/components/button';
import { EmotionType, getEmotionInfo } from '@/commons/constants/enum';
import styles from './styles.module.css';

// Mock 데이터
const mockDiaryData = {
  title: '이것은 타이틀 입니다.',
  emotion: EmotionType.HAPPY,
  date: '2024. 07. 12',
  content:
    '내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다',
};

export default function DiariesDetail() {
  const emotionInfo = getEmotionInfo(mockDiaryData.emotion);

  const handleCopyContent = () => {
    navigator.clipboard.writeText(mockDiaryData.content);
  };

  const handleEdit = () => {
    console.log('수정 버튼 클릭');
  };

  const handleDelete = () => {
    console.log('삭제 버튼 클릭');
  };

  return (
    <div className={styles.container}>
      <div className={styles.gap64} />

      {/* detail-title */}
      <div className={styles.detailTitle}>
        <div className={styles.titleSection}>
          <h1 className={styles.titleText}>{mockDiaryData.title}</h1>
        </div>
        <div className={styles.emotionDateSection}>
          <div className={styles.emotionWrapper}>
            <Image
              src={emotionInfo.imageS}
              alt={emotionInfo.displayText}
              width={32}
              height={32}
              className={styles.emotionIcon}
            />
            <span className={styles.emotionText} style={{ color: emotionInfo.color }}>
              {emotionInfo.displayText}
            </span>
          </div>
          <div className={styles.dateWrapper}>
            <span className={styles.dateText}>{mockDiaryData.date}</span>
            <span className={styles.dateText}>작성</span>
          </div>
        </div>
      </div>

      <div className={styles.gap24} />

      {/* detail-content */}
      <div className={styles.detailContent}>
        <div className={styles.contentSection}>
          <div className={styles.contentLabel}>내용</div>
          <div className={styles.contentBody}>{mockDiaryData.content}</div>
        </div>
        <div className={styles.contentFooter}>
          <button className={styles.copyButton} onClick={handleCopyContent}>
            <Image
              src="/icons/copy_outline_light_m.svg"
              alt="복사"
              width={24}
              height={24}
              className={styles.copyIcon}
            />
            <span className={styles.copyText}>내용 복사</span>
          </button>
        </div>
      </div>

      <div className={styles.gap24} />

      {/* detail-footer */}
      <div className={styles.detailFooter}>
        <div className={styles.buttonWrapper}>
          <Button
            variant="tertiary"
            size="small"
            theme="light"
            onClick={handleEdit}
            className={styles.actionButton}
          >
            수정
          </Button>
          <Button
            variant="tertiary"
            size="small"
            theme="light"
            onClick={handleDelete}
            className={styles.actionButton}
          >
            삭제
          </Button>
        </div>
      </div>

      <div className={styles.gap24} />
      <div className={styles.retrospectInput}>retrospect-input</div>
      <div className={styles.gap16} />
      <div className={styles.retrospectList}>retrospect-list</div>
    </div>
  );
}

