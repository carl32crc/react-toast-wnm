import React from 'react';

interface ToastOptions {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  removeToast?: () => void;
  subtitle?: string;
  title?: string;
}

export const Toast: React.FC<ToastOptions> = ({
  onMouseEnter,
  onMouseLeave,
  removeToast,
  title,
  subtitle,
}) => {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <span onClick={removeToast}>Remove</span>
    </div>
  );
};
