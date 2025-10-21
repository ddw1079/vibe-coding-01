'use client';

import React, { InputHTMLAttributes, forwardRef } from 'react';
import styles from './styles.module.css';

// Input Props Interface
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  theme?: 'light' | 'dark';
  fullWidth?: boolean;
  error?: boolean;
}

/**
 * Input Component
 * variant, size, theme를 지원하는 완전한 인풋 컴포넌트
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      theme = 'dark',
      fullWidth = false,
      error = false,
      className = '',
      disabled = false,
      ...rest
    },
    ref
  ) => {
    const inputClasses = [
      styles.input,
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

    return <input ref={ref} className={inputClasses} disabled={disabled} {...rest} />;
  }
);

Input.displayName = 'Input';

export default Input;

