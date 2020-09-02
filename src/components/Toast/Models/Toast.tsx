import React, { ReactElement } from 'react';
import { generateUUID } from 'helpers/generateUUID';
import { Actions, contentTypes } from '../components';
import { Timer } from './Timer';

export interface Options {
  actions?: ReactElement;
  autoDismiss?: boolean;
  backgroundColor?: string;
  borderRadius?: string;
  color?: string;
  content?: ReactElement;
  delay?: number;
  enableAnimation?: boolean;
  height?: string;
  isClosable?: boolean;
  onDismiss?: (id: string) => void;
  padding?: string;
  position?: string;
  subtitle?: string;
  title?: string;
  type?: string;
  width?: string;
}

export class Toast {
  actions?: ReactElement;
  backgroundColor?: string;
  borderRadius?: string;
  color?: string;
  content?: ReactElement;
  enableAnimation?: boolean;
  height?: string;
  id: string;
  padding?: string;
  position: string;
  subtitle?: string;
  timer: Timer;
  title?: string;
  type: string;
  width?: string;
  constructor({
    actions,
    autoDismiss = true,
    backgroundColor,
    borderRadius,
    color,
    content,
    delay = 3000,
    enableAnimation = true,
    height,
    isClosable = true,
    onDismiss,
    padding,
    position = 'bottom-right',
    subtitle,
    title,
    type = 'default',
    width,
  }: Options) {
    this.content = content ? content : contentTypes[type];
    this.enableAnimation = enableAnimation;
    this.id = generateUUID();
    this.position = position;
    this.type = type;
    if (autoDismiss && onDismiss) {
      this.timer = new Timer(onDismiss.bind(undefined, this.id), delay);
    }
    if (backgroundColor) this.backgroundColor = backgroundColor;
    if (borderRadius) this.borderRadius = borderRadius;
    if (color) this.color = color;
    if (height) this.height = height;
    if (isClosable) this.actions = actions ? actions : <Actions />;
    if (padding) this.padding = padding;
    if (subtitle) this.subtitle = subtitle;
    if (title) this.title = title;
    if (width) this.width = width;
  }

  onMouseEnter = (): void => {
    this.timer && this.timer.pause();
  };

  onMouseLeave = (): void => {
    this.timer && this.timer.resume();
  };
}
