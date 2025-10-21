'use client';

import React from 'react';
import styles from './styles.module.css';

export default function DiariesNew() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>header</div>
      <div className={styles.gap40} />
      <div className={styles.emotionBox}>emotion-box</div>
      <div className={styles.gap40} />
      <div className={styles.inputTitle}>input-title</div>
      <div className={styles.gap24} />
      <div className={styles.inputContent}>input-content</div>
      <div className={styles.gap40} />
      <div className={styles.footer}>footer</div>
    </div>
  );
}

