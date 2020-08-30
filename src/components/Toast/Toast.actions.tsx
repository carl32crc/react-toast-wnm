import React, { ReactNode, memo, ReactElement } from 'react';
import { toastController } from './controllers';

interface CloseToast {
  children?: ReactNode;
  id?: string;
}

// eslint-disable-next-line react/display-name
export const Actions: React.FC<CloseToast> = memo(({ children, id }) => {
  const clones = React.Children.map(children, (child: ReactElement) =>
    React.cloneElement(child, {
      closeToast: () => toastController.removeToast(id!),
    })
  );
  return <>{clones}</>;
});
