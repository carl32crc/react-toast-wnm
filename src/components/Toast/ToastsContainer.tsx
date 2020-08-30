import React, { useState, useEffect } from 'react';
import { toastController, ToastController } from './controllers';
import { Toast } from './Toast';
import { Toast as ToastModel } from './Models';
import { classes } from 'typestyle';
import { toastContainer, containerPosition } from './Toast.style';

type toastsByPosition = {
  [position: string]: ToastModel[];
};

const toastsByPosition: toastsByPosition = {
  'bottom-right': [],
  'bottom-left': [],
  'bottom-center': [],
  'top-center': [],
  'top-right': [],
  'top-left': [],
};

export const ToastsContainer = (): JSX.Element => {
  const [toasts, setToasts] = useState<ToastModel[]>([]);
  function onToastsUpdate(newState: ToastController): void {
    const { toasts } = newState;
    setToasts(toasts);
  }

  useEffect(() => {
    toastController?.subject.attach(onToastsUpdate);
    return (): void => toastController?.subject.detach(onToastsUpdate);
  }, []);

  const groupToastsByPosition = toasts.reduce(
    (toastsByPosition: toastsByPosition, toast) => {
      return {
        ...toastsByPosition,
        [toast.position]: [...toastsByPosition[toast.position], toast],
      };
    },
    toastsByPosition
  );

  return (
    <>
      {Object.keys(groupToastsByPosition).map((positionKey) => {
        return groupToastsByPosition[positionKey].length > 0 ? (
          <div
            key={positionKey}
            className={classes(toastContainer, containerPosition[positionKey])}
          >
            {groupToastsByPosition[positionKey]?.map((toast: ToastModel) => (
              <Toast key={toast.id} {...toast}>
                {{ actions: toast.actions, content: toast.content }}
              </Toast>
            ))}
          </div>
        ) : null;
      })}
    </>
  );
};
