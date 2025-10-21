import React from 'react';
import styles from './styles.module.css';

export default function Diaries() {
  return (
    <div className={styles.container}>
      <div className={styles.gap32} />
      <div className={styles.search}>
        <span className={styles.placeholder}>search</span>
      </div>
      <div className={styles.gap42} />
      <div className={styles.main}>
        <span className={styles.placeholder}>main</span>
      </div>
      <div className={styles.gap40} />
      <div className={styles.pagination}>
        <span className={styles.placeholder}>pagination</span>
      </div>
      <div className={styles.gap40} />
    </div>
  );
}

