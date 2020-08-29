import React, { useState, useEffect } from 'react';
import { toastController, ToastController } from './controllers';
import { Toast } from './Toast';
import { Toast as ToastModel } from './Models';

export const ToastsContainer = (): JSX.Element => {
  const [toasts, setToasts] = useState(toastController?.toasts);
  function onToastsUpdate(newState: ToastController): void {
    const { toasts } = newState;
    setToasts(toasts);
  }

  useEffect(() => {
    toastController?.subject.attach(onToastsUpdate);
    return (): void => toastController?.subject.detach(onToastsUpdate);
  }, []);

  return (
    <>
      {toasts?.map((toast: ToastModel) => (
        <Toast key={toast.id} {...toast}>
          {{ actions: toast.actions, content: toast.content }}
        </Toast>
      ))}
    </>
  );
};
