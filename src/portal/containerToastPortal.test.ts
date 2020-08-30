import { containerToastPortal } from './containerToastPortal';

describe('Portal - container toasts', () => {
  it('create portal', async () => {
    containerToastPortal();
    const result = document.body.innerHTML.includes('container-toasts');
    expect(result).toBeTruthy();
  });
  it('create portal in case exist', async () => {
    containerToastPortal();
    containerToastPortal();
    const result = document.body.innerHTML.includes('container-toasts');
    expect(result).toBeTruthy();
  });
});
