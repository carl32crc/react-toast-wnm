import React, { ReactNode } from 'react';
import { style, classes } from 'typestyle';
import {
  notification,
  toastAnimation,
  toastPosition,
  toastType,
  wrapperToastGenericStyles,
} from './Toast.style';
import { Actions } from './Toast.actions';
import { Content } from './Toast.content';

type ToastOptions = {
  backgroundColor?: string;
  borderRadius?: string;
  color?: string;
  enableAnimation?: boolean;
  height?: string;
  id?: string;
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

export const Toast: React.FC<ToastOptions> = React.memo(
  ({
    backgroundColor,
    borderRadius = '6px',
    children,
    color = '#fff',
    enableAnimation = true,
    height = '104px',
    id,
    onMouseEnter,
    onMouseLeave,
    padding = '24px 32px',
    position = 'bottom-right',
    subtitle,
    title,
    type = 'default',
    width = '456px',
  }) => {
    const _backgroundColor = style({
      backgroundColor,
    });
    const _borderRadius = style({
      borderRadius,
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
          _borderRadius,
          _color,
          _height,
          _padding,
          _width,
          notification,
          enableAnimation && toastAnimation[position],
          toastPosition[position],
          !backgroundColor && toastType[type],
          wrapperToastGenericStyles
        )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Content subtitle={subtitle} title={title}>
          {children?.content && children.content}
        </Content>
        <Actions id={id}>{children?.actions && children.actions}</Actions>
      </div>
    );
  }
);
