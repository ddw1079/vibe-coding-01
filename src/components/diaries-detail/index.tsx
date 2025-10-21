'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/commons/components/button';
import { Input } from '@/commons/components/input';
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

const mockRetrospectData = [
  {
    id: 1,
    text: '3년이 지나고 다시 보니 이때가 그립다.',
    date: '2024. 09. 24',
  },
  {
    id: 2,
    text: '3년이 지나고 다시 보니 이때가 그립다.',
    date: '2024. 09. 24',
  },
];

export default function DiariesDetail() {
  const emotionInfo = getEmotionInfo(mockDiaryData.emotion);
  const [retrospectInput, setRetrospectInput] = useState('');

  const handleCopyContent = () => {
    navigator.clipboard.writeText(mockDiaryData.content);
  };

  const handleEdit = () => {
    console.log('수정 버튼 클릭');
  };

  const handleDelete = () => {
    console.log('삭제 버튼 클릭');
  };

  const handleRetrospectSubmit = () => {
    console.log('회고 입력:', retrospectInput);
    setRetrospectInput('');
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
            variant="secondary"
            size="small"
            theme="light"
            onClick={handleEdit}
            className={styles.actionButton}
          >
            수정
          </Button>
          <Button
            variant="secondary"
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

      {/* retrospect-input */}
      <div className={styles.retrospectInput}>
        <div className={styles.retrospectLabel}>회고</div>
        <div className={styles.retrospectInputWrapper}>
          <Input
            variant="primary"
            size="medium"
            theme="light"
            placeholder="회고를 남겨보세요."
            value={retrospectInput}
            onChange={(e) => setRetrospectInput(e.target.value)}
            className={styles.retrospectInputField}
          />
          <Button
            variant="primary"
            size="medium"
            theme="light"
            onClick={handleRetrospectSubmit}
            className={styles.retrospectInputButton}
          >
            입력
          </Button>
        </div>
      </div>

      <div className={styles.gap16} />

      {/* retrospect-list */}
      <div className={styles.retrospectList}>
        {mockRetrospectData.map((retrospect, index) => (
          <React.Fragment key={retrospect.id}>
            <div className={styles.retrospectItem}>
              <span className={styles.retrospectItemText}>{retrospect.text}</span>
              <span className={styles.retrospectItemDate}>[{retrospect.date}]</span>
            </div>
            {index < mockRetrospectData.length - 1 && (
              <div className={styles.retrospectDivider} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

