'use client';

import React, { InputHTMLAttributes, forwardRef } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

// SearchBar Props Interface
export interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  theme?: 'light' | 'dark';
  fullWidth?: boolean;
  error?: boolean;
  onSearch?: (value: string) => void;
}

/**
 * SearchBar Component
 * variant, size, theme를 지원하는 완전한 검색바 컴포넌트
 */
export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      theme = 'dark',
      fullWidth = false,
      error = false,
      className = '',
      disabled = false,
      placeholder = '검색어를 입력해 주세요.',
      onSearch,
      onKeyDown,
      ...rest
    },
    ref
  ) => {
    const containerClasses = [
      styles.searchBarContainer,
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      styles[`theme-${theme}`],
      fullWidth ? styles.fullWidth : '',
      disabled ? styles.disabled : '',
      error ? styles.error : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onSearch) {
        onSearch(e.currentTarget.value);
      }
      onKeyDown?.(e);
    };

    return (
      <div className={containerClasses}>
        <div className={styles.iconWrapper}>
          <Image
            src="/icons/search_outline_light_m.svg"
            alt="search"
            width={24}
            height={24}
            className={styles.searchIcon}
          />
        </div>
        <input
          ref={ref}
          type="text"
          className={styles.input}
          placeholder={placeholder}
          disabled={disabled}
          onKeyDown={handleKeyDown}
          {...rest}
        />
      </div>
    );
  }
);

SearchBar.displayName = 'SearchBar';

export default SearchBar;

