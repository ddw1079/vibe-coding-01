'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';
import { Input } from '@/commons/components/input';
import { Button } from '@/commons/components/button';
import { EmotionType, emotionList } from '@/commons/constants/enum';
import { useModal } from '@/commons/providers/modal/modal.provider';

export default function DiariesNew() {
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionType | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  const { closeModal } = useModal();

  const handleEmotionChange = (emotion: EmotionType) => {
    setSelectedEmotion(emotion);
  };

  const handleClose = () => {
    closeModal();
  };

  const handleSubmit = () => {
    console.log('등록하기', { selectedEmotion, title, content });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle} data-testid="diary-modal-title">일기 쓰기</h1>
      </div>
      <div className={styles.gap40} />
      <div className={styles.emotionBox}>
        <div className={styles.emotionLabel}>오늘 기분은 어땟나요?</div>
        <div className={styles.emotionRadioGroup}>
          {emotionList.map((emotion) => (
            <label key={emotion.type} className={styles.radioLabel}>
              <input
                type="radio"
                name="emotion"
                value={emotion.type}
                checked={selectedEmotion === emotion.type}
                onChange={() => handleEmotionChange(emotion.type)}
                className={styles.radioInput}
              />
              <span
                className={`${styles.radioIcon} ${
                  selectedEmotion === emotion.type ? styles.radioIconChecked : ''
                }`}
              />
              <span className={styles.radioText}>{emotion.displayText}</span>
            </label>
          ))}
        </div>
      </div>
      <div className={styles.gap40} />
      <div className={styles.inputTitle}>
        <label className={styles.inputLabel}>제목</label>
        <Input
          theme="light"
          size="medium"
          placeholder="제목을 입력합니다."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.inputField}
        />
      </div>
      <div className={styles.gap24} />
      <div className={styles.inputContent}>
        <label className={styles.inputLabel}>내용</label>
        <textarea
          placeholder="내용을 입력합니다."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={styles.textareaField}
        />
      </div>
      <div className={styles.gap40} />
      <div className={styles.footer}>
        <Button
          theme="light"
          variant="tertiary"
          size="medium"
          onClick={handleClose}
          className={styles.buttonClose}
          data-testid="diary-modal-close"
        >
          닫기
        </Button>
        <Button
          theme="light"
          variant="primary"
          size="medium"
          onClick={handleSubmit}
          className={styles.buttonSubmit}
        >
          등록하기
        </Button>
      </div>
    </div>
  );
}

