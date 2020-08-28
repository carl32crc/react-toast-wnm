import React from 'react';
import { CloseIcon } from 'Icons';
import { closeIcon } from '../Toast.style';

type Actions = {
  closeToast?: () => void;
};

export const Actions: React.FC<Actions> = ({ closeToast }): JSX.Element => (
  <CloseIcon
    color="#fff"
    width="24px"
    height="24px"
    className={closeIcon}
    onClick={closeToast}
  />
);

export const CustomAct: React.FC<Actions> = ({ closeToast }): JSX.Element => (
  <CloseIcon
    color="#000"
    width="24px"
    height="24px"
    className={closeIcon}
    onClick={closeToast}
  />
);
