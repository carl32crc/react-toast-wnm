import { generateUUID } from 'helpers/generateUUID';
import { Timer } from './Timer';

export interface Options {
  autoDismiss?: boolean;
  backgroundColor?: string;
  color?: string;
  delay?: number;
  height?: string;
  onDismiss?: (id: string) => void;
  padding?: string;
  position?: string;
  subtitle?: string;
  title?: string;
  toastComponent?: any;
  type?: string;
  width?: string;
}

export class Toast {
  backgroundColor?: string;
  color?: string;
  height?: string;
  id: string;
  padding?: string;
  position: string;
  subtitle?: string;
  timer: Timer | null;
  title?: string;
  type?: string;
  width: string;
  constructor({
    autoDismiss = true,
    backgroundColor,
    color,
    delay = 3000,
    height,
    onDismiss,
    padding,
    position,
    subtitle,
    title,
    type,
    width,
  }: Options) {
    this.id = generateUUID();
    this.timer =
      autoDismiss && onDismiss
        ? new Timer(onDismiss.bind(undefined, this.id), delay)
        : null;
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
