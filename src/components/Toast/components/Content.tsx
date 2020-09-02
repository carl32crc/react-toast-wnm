import React from 'react';
import {
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from 'components/Icons';
import { content, leftIcon } from '../Toast.style';

type Content = {
  title?: string;
  subtitle?: string;
};

export const ErrorContent: React.FC<Content> = ({ subtitle, title }) => (
  <div className={content}>
    <ErrorIcon className={leftIcon} color="#fff" width="40px" height="40px" />
    <div>
      {title && <div>{title}</div>}
      {subtitle && <div>{subtitle}</div>}
    </div>
  </div>
);

export const InfoContent: React.FC<Content> = ({ subtitle, title }) => (
  <div className={content}>
    <InfoIcon className={leftIcon} color="#fff" width="40px" height="40px" />
    <div>
      {title && <div>{title}</div>}
      {subtitle && <div>{subtitle}</div>}
    </div>
  </div>
);

export const SuccessContent: React.FC<Content> = ({ subtitle, title }) => (
  <div className={content}>
    <SuccessIcon className={leftIcon} color="#fff" width="40px" height="40px" />
    <div>
      {title && <div>{title}</div>}
      {subtitle && <div>{subtitle}</div>}
    </div>
  </div>
);

export const WarningContent: React.FC<Content> = ({ subtitle, title }) => (
  <div className={content}>
    <WarningIcon className={leftIcon} color="#fff" width="40px" height="40px" />
    <div>
      {title && <div>{title}</div>}
      {subtitle && <div>{subtitle}</div>}
    </div>
  </div>
);

export const CustomContent: React.FC<Content> = ({ subtitle, title }) => (
  <div className={content}>
    <WarningIcon className={leftIcon} color="#000" width="40px" height="40px" />
    <div>
      {title && <div>{title}</div>}
      {subtitle && <div>{subtitle}</div>}
    </div>
  </div>
);
