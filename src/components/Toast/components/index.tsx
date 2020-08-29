import React from 'react';
import { Actions, CustomAct } from './Actions';
import {
  ErrorContent,
  InfoContent,
  SuccessContent,
  WarningContent,
  CustomContent,
} from './Content';

export const defaultToast = {
  actions: <Actions />,
  content: <SuccessContent />,
};

export const errorToast = {
  actions: <Actions />,
  content: <ErrorContent />,
};

export const infoToast = {
  actions: <Actions />,
  content: <InfoContent />,
};

export const successToast = {
  actions: <Actions />,
  content: <SuccessContent />,
};

export const warningToast = {
  actions: <Actions />,
  content: <WarningContent />,
};

export const customToast = {
  actions: <CustomAct />,
  content: <CustomContent />,
};

export const contentTypes = {
  success: <SuccessContent />,
  default: <SuccessContent />,
  error: <ErrorContent />,
  warning: <WarningContent />,
  info: <InfoContent />,
};

export { Actions };
