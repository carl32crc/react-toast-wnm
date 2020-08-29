import React from 'react';

import { Options } from 'components/Toast/Models';
import { toastController } from 'components/Toast/controllers';

export const useToast = (): ((options: Options) => void) => {
  return React.useMemo(() => {
    const toast = function (options: Options): void {
      toastController.addToast(options);
    };

    return toast;
  }, []);
};
