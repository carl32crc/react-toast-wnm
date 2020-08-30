import { Timer } from './Timer';

const sleep = (time = 1000): Promise<() => void> =>
  new Promise((r) => setTimeout(r, time));

describe('Timer model', () => {
  it('pause', async () => {
    const callback = jest.fn();
    const timer = new Timer(callback, 1000);
    expect(timer.remaining).toEqual(1000);
    await sleep(500);
    timer.pause();
    expect(timer.remaining).toBeLessThan(1000);
  });
  it('resume', async () => {
    const callback = jest.fn();
    const timer = new Timer(callback, 1000);
    const _initialStart = Object.assign({}, { start: timer.start });
    expect(timer.remaining).toEqual(1000);
    await sleep(500);
    timer.pause();
    expect(timer.remaining).toBeLessThan(1000);
    timer.resume();
    expect(timer.start).toBeGreaterThan(_initialStart.start);
  });
  it('clear', async () => {
    const callback = jest.fn();
    const timer = new Timer(callback, 1000);
    expect(false).toEqual(timer.destroyed);
    await sleep(500);
    timer.clear();
    expect(true).toEqual(timer.destroyed);
  });
});
