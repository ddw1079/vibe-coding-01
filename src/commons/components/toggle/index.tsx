'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';

// Toggle Props Interface
export interface ToggleProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  theme?: 'light' | 'dark';
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

/**
 * Toggle Component
 * variant, size, theme를 지원하는 완전한 토글 컴포넌트
 */
export const Toggle: React.FC<ToggleProps> = ({
  variant = 'primary',
  size = 'medium',
  theme = 'dark',
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  disabled = false,
  className = '',
}) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;

    const newChecked = !checked;
    
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    
    onChange?.(newChecked);
  };

  const toggleClasses = [
    styles.toggle,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    styles[`theme-${theme}`],
    checked ? styles.checked : styles.unchecked,
    disabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClasses = [
    styles.handle,
    checked ? styles.handleChecked : styles.handleUnchecked,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      className={toggleClasses}
      onClick={handleToggle}
      disabled={disabled}
    >
      <span className={handleClasses} />
    </button>
  );
};

export default Toggle;

