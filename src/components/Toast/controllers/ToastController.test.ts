import { Subject } from 'subject';
import { ToastController } from './ToastController';
import { Toast } from '../Models';

describe('Toast Controller', () => {
  it('addToast', async () => {
    const toastController = new ToastController(new Subject());
    toastController.addToast(new Toast({}));
    expect(toastController.toasts.length).toEqual(1);
  });
  it('removeToast', async () => {
    const toastController = new ToastController(new Subject());
    toastController.addToast(new Toast({}));
    expect(toastController.toasts.length).toEqual(1);
    toastController.removeToast(toastController.toasts[0].id);
    expect(toastController.toasts.length).toEqual(0);
  });
});
