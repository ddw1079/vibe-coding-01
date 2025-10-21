'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.css';

// Button Props Interface
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  theme?: 'light' | 'dark';
  children: ReactNode;
  fullWidth?: boolean;
}

/**
 * Button Component
 * variant, size, theme를 지원하는 완전한 버튼 컴포넌트
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  theme = 'dark',
  children,
  fullWidth = false,
  className = '',
  disabled = false,
  ...rest
}) => {
  const buttonClasses = [
    styles.button,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    styles[`theme-${theme}`],
    fullWidth ? styles.fullWidth : '',
    disabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClasses} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;

