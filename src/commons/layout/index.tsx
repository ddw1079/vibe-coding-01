'use client';

import React from 'react';
import styles from './styles.module.css';
import { useLayoutNavigation } from './hooks/index.link.routing.hook';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const {
    isDiariesActive,
    isPicturesActive,
    navigateToDiaries,
    navigateToPictures,
  } = useLayoutNavigation();

  return (
    <div className={styles.container}>
      <header className={styles.header} data-testid="layout-header">
        <div className={styles.headerContent}>
          <div 
            className={styles.logo} 
            onClick={navigateToDiaries}
            data-testid="layout-logo"
          >
            <span className={styles.logoText}>민지의 다이어리</span>
          </div>
          <div className={styles.darkModeArea}>
            <span className={styles.darkModeText}>다크모드</span>
          </div>
        </div>
      </header>
      <div className={styles.gap} />
      <div className={styles.banner}>
        <div className={styles.bannerImage} />
      </div>
      <div className={styles.gap} />
      <nav className={styles.navigation}>
        <div className={styles.navigationContent}>
          <div 
            className={`${styles.tab} ${isDiariesActive ? styles.tabActive : ''}`}
            onClick={navigateToDiaries}
            data-testid="nav-tab-diaries"
          >
            <span 
              className={isDiariesActive ? styles.tabText : styles.tabTextInactive}
              data-testid="nav-tab-diaries-text"
            >
              일기보관함
            </span>
          </div>
          <div 
            className={`${styles.tab} ${isPicturesActive ? styles.tabActive : ''}`}
            onClick={navigateToPictures}
            data-testid="nav-tab-pictures"
          >
            <span 
              className={isPicturesActive ? styles.tabText : styles.tabTextInactive}
              data-testid="nav-tab-pictures-text"
            >
              사진보관함
            </span>
          </div>
        </div>
      </nav>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>민지의 다이어리</div>
          <div className={styles.footerInfo}>대표 : {'{name}'}</div>
          <div className={styles.footerCopyright}>
            Copyright © 2024. {'{name}'} Co., Ltd.
          </div>
        </div>
      </footer>
    </div>
  );
}

