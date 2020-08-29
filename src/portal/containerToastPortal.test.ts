import { containerToastPortal } from './containerToastPortal';

describe('Portal - container toasts', () => {
  it('create portal', async () => {
    containerToastPortal();
    const result = document.body.innerHTML.includes('container-toasts');
    expect(result).toBeTruthy();
  });
});
