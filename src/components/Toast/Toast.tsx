import React, { ReactNode } from 'react';
import { style, classes } from 'typestyle';
import {
  notification,
  toastPosition,
  toastType,
  wrapperToastGenericStyles,
} from './Toast.style';
import { ActionsContent } from './CloseToast';
import { ContentToast } from './ContentToast';

type ToastOptions = {
  id?: string;
  backgroundColor?: string;
  color?: string;
  height?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  padding?: string;
  position?: string;
  subtitle?: string;
  title?: string;
  type?: string;
  width?: string;
  children?: {
    content?: ReactNode;
    actions?: ReactNode;
  };
};

export const Toast: React.FC<ToastOptions> = ({
  id,
  backgroundColor,
  color = '#fff',
  height = '104px',
  onMouseEnter,
  onMouseLeave,
  padding = '24px 32px',
  position = 'bottom-right',
  subtitle,
  title,
  type = 'default',
  width = '456px',
  children,
}) => {
  const _backgroundColor = style({
    backgroundColor,
  });
  const _color = style({
    color,
  });
  const _height = style({
    height,
  });
  const _padding = style({
    padding,
  });
  const _width = style({
    width,
  });
  return (
    <div
      className={classes(
        _backgroundColor,
        _color,
        _height,
        _padding,
        _width,
        notification,
        toastPosition[position],
        !backgroundColor && toastType[type],
        wrapperToastGenericStyles
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ContentToast subtitle={subtitle} title={title}>
        {children?.content && children.content}
      </ContentToast>
      <ActionsContent id={id}>
        {children?.actions && children.actions}
      </ActionsContent>
    </div>
  );
};
