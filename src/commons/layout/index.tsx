'use client';

import React from 'react';
import styles from './styles.module.css';
import { useLayoutNavigation } from './hooks/index.link.routing.hook';
import { useLayoutArea } from './hooks/index.area.hook';

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

  const {
    isHeaderVisible,
    isLogoVisible,
    isBannerVisible,
    isNavigationVisible,
    isFooterVisible,
  } = useLayoutArea();

  return (
    <div className={styles.container}>
      {isHeaderVisible && (
        <header className={styles.header} data-testid="layout-header">
          <div className={styles.headerContent}>
            {isLogoVisible && (
              <div 
                className={styles.logo} 
                onClick={navigateToDiaries}
                data-testid="layout-logo"
              >
                <span className={styles.logoText}>민지의 다이어리</span>
              </div>
            )}
            <div className={styles.darkModeArea}>
              <span className={styles.darkModeText}>다크모드</span>
            </div>
          </div>
        </header>
      )}
      {(isHeaderVisible || isBannerVisible) && <div className={styles.gap} />}
      {isBannerVisible && (
        <div className={styles.banner} data-testid="layout-banner">
          <div className={styles.bannerImage} />
        </div>
      )}
      {(isBannerVisible || isNavigationVisible) && <div className={styles.gap} />}
      {isNavigationVisible && (
        <nav className={styles.navigation} data-testid="layout-navigation">
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
      )}
      <main className={styles.main}>{children}</main>
      {isFooterVisible && (
        <footer className={styles.footer} data-testid="layout-footer">
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>민지의 다이어리</div>
            <div className={styles.footerInfo}>대표 : {'{name}'}</div>
            <div className={styles.footerCopyright}>
              Copyright © 2024. {'{name}'} Co., Ltd.
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

