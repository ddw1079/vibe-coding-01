'use client';

import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

// Pagination Props Interface
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  theme?: 'light' | 'dark';
  maxVisiblePages?: number;
}

/**
 * Pagination Component
 * variant, size, theme를 지원하는 완전한 페이지네이션 컴포넌트
 */
export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  variant = 'primary',
  size = 'medium',
  theme = 'light',
  maxVisiblePages = 5,
}) => {
  // 이전 페이지로 이동
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // 다음 페이지로 이동
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // 표시할 페이지 번호 계산
  const getVisiblePages = (): number[] => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const halfVisible = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(1, currentPage - halfVisible);
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  const visiblePages = getVisiblePages();
  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  const containerClasses = [
    styles.pagination,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    styles[`theme-${theme}`],
  ]
    .filter(Boolean)
    .join(' ');

  const leftIconSrc = canGoPrevious
    ? '/icons/leftenable_outline_light_m.svg'
    : '/icons/leftdisabled_outline_light_m.svg';

  const rightIconSrc = canGoNext
    ? '/icons/rightenable_outline_light_m.svg'
    : '/icons/rightdisabled_outline_light_m.svg';

  return (
    <div className={containerClasses}>
      {/* 이전 버튼 */}
      <button
        className={`${styles.arrowButton} ${!canGoPrevious ? styles.arrowDisabled : ''}`}
        onClick={handlePrevious}
        disabled={!canGoPrevious}
        aria-label="이전 페이지"
      >
        <Image src={leftIconSrc} alt="이전" width={24} height={24} />
      </button>

      {/* 페이지 번호 버튼들 */}
      <div className={styles.pageNumbers}>
        {visiblePages.map((page) => (
          <button
            key={page}
            className={`${styles.pageButton} ${page === currentPage ? styles.pageActive : ''}`}
            onClick={() => onPageChange(page)}
            aria-label={`${page} 페이지`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      {/* 다음 버튼 */}
      <button
        className={`${styles.arrowButton} ${!canGoNext ? styles.arrowDisabled : ''}`}
        onClick={handleNext}
        disabled={!canGoNext}
        aria-label="다음 페이지"
      >
        <Image src={rightIconSrc} alt="다음" width={24} height={24} />
      </button>
    </div>
  );
};

export default Pagination;

