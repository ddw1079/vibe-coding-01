'use client';

import React, { useState, useRef, useEffect, ReactNode } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

// SelectBox Option Interface
export interface SelectOption {
  value: string;
  label: ReactNode;
}

// SelectBox Props Interface
export interface SelectBoxProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  theme?: 'light' | 'dark';
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

/**
 * SelectBox Component
 * variant, size, theme를 지원하는 완전한 셀렉트박스 컴포넌트
 */
export const SelectBox: React.FC<SelectBoxProps> = ({
  variant = 'primary',
  size = 'medium',
  theme = 'light',
  options,
  value,
  onChange,
  placeholder = '전체',
  disabled = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const selectRef = useRef<HTMLDivElement>(null);

  // 선택된 옵션 찾기
  const selectedOption = options.find((opt) => opt.value === selectedValue);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // value prop이 변경되면 selectedValue 업데이트
  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  // 토글 핸들러
  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  // 옵션 선택 핸들러
  const handleOptionClick = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    onChange?.(optionValue);
  };

  // 클래스 조합
  const selectClasses = [
    styles.selectBox,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    styles[`theme-${theme}`],
    isOpen ? styles.open : '',
    disabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const dropdownClasses = [
    styles.dropdown,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    styles[`theme-${theme}`],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.container} ref={selectRef}>
      <div className={selectClasses} onClick={handleToggle}>
        <div className={styles.content}>
          <span className={styles.label}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <Image
            src="/icons/arrow_drop_down.svg"
            alt="dropdown arrow"
            width={24}
            height={24}
            className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
          />
        </div>
      </div>

      {isOpen && (
        <div className={dropdownClasses}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.option} ${
                option.value === selectedValue ? styles.selected : ''
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectBox;

