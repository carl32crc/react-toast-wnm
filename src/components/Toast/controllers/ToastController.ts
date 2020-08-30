import { Subject } from 'subject';
import { Toast, Options } from '../Models';
import { containerToastPortal } from 'portal/containerToastPortal';

class ToastController {
  toasts: Toast[] = [];
  subject: Subject;

  constructor(subject: Subject) {
    this.subject = subject;
  }

  addToast(options: Options): void {
    this.toasts = [
      ...this.toasts,
      new Toast({ ...options, onDismiss: this.removeToast }),
    ];
    this.subject.publish(this);
  }

  removeToast = (id: string): void => {
    this.toasts = this.toasts.filter((toast: Toast) => toast.id !== id);
    this.subject.publish(this);
  };
}

const toastController = new ToastController(new Subject());

containerToastPortal && containerToastPortal();

export { toastController, ToastController };
