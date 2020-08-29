import { generateUUID } from 'helpers/generateUUID';
import { Actions, contentTypes } from './../components';
import { Timer } from './Timer';

export interface Options {
  actions?: any;
  autoDismiss?: boolean;
  backgroundColor?: string;
  color?: string;
  content?: any;
  delay?: number;
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
  actions?: any;
  backgroundColor?: string;
  color?: string;
  content?: any;
  height?: string;
  id: string;
  padding?: string;
  position: string;
  subtitle?: string;
  timer: Timer;
  title?: string;
  type?: string;
  width: string;
  constructor({
    actions,
    autoDismiss = true,
    backgroundColor,
    color,
    content,
    delay = 3000,
    height,
    isClosable = true,
    onDismiss,
    padding,
    position,
    subtitle,
    title,
    type = 'default',
    width,
  }: Options) {
    this.id = generateUUID();
    this.content = content ? content : contentTypes[type];
    if (isClosable) this.actions = actions ? actions : Actions;
    if (autoDismiss && onDismiss) {
      this.timer = new Timer(onDismiss.bind(undefined, this.id), delay);
    }
    if (backgroundColor) this.backgroundColor = backgroundColor;
    if (color) this.color = color;
    if (height) this.height = height;
    if (padding) this.padding = padding;
    if (position) this.position = position;
    if (subtitle) this.subtitle = subtitle;
    if (title) this.title = title;
    if (type) this.type = type;
    if (width) this.width = width;
  }
}
