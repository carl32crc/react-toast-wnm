export class Timer {
  timerId: NodeJS.Timeout;
  start: number;
  remaining: number;
  destroyed: boolean;
  callback: (id: string) => void;

  constructor(callback: (id: string) => void, delay: number) {
    this.start = Date.now();
    this.remaining = delay;
    this.callback = callback;
    this.destroyed = false;
    this.timerId = setTimeout(this.callback, this.remaining);
  }

  clear = (): void => {
    clearTimeout(this.timerId);
    this.destroyed = true;
  };

  pause = (): void => {
    clearTimeout(this.timerId);
    this.remaining -= Date.now() - this.start;
  };

  resume = (): void => {
    this.start = Date.now();
    clearTimeout(this.timerId);
    this.timerId = setTimeout(this.callback, this.remaining);
    this.destroyed = false;
  };
}
