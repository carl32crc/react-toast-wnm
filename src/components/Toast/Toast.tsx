import React from 'react';
import { style, classes } from 'typestyle';

import {
  closeIcon,
  content,
  notification,
  toastPosition,
  toastType,
  wrapperToastGenericStyles,
} from './Toast.style';

interface ToastOptions {
  action?: () => void;
  cancelAction?: () => void;
  height?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  position?: string;
  removeToast?: () => void;
  subtitle?: string;
  title?: string;
  type?: string;
  width?: string;
}

export const Toast: React.FC<ToastOptions> = ({
  action,
  cancelAction,
  height = '104px',
  onMouseEnter,
  onMouseLeave,
  position = 'bottom-right',
  removeToast,
  subtitle,
  title,
  type = 'default',
  width = '456px',
}) => {
  const _width = style({
    width,
  });
  const _height = style({
    height,
  });
  return (
    <div
      className={classes(
        _width,
        _height,
        wrapperToastGenericStyles,
        notification,
        toastPosition[position],
        toastType[type]
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={content}>
        {title && <div>{title}</div>}
        {subtitle && <div>{subtitle}</div>}
      </div>

      {removeToast && (
        <span className={closeIcon} onClick={removeToast}>
          Remove
        </span>
      )}

      {action && <button onClick={action}>Action</button>}

      {cancelAction && <button onClick={cancelAction}>Cancel Action</button>}
    </div>
  );
};
