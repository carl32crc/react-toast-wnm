import * as React from 'react';
import { CloseIcon, ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from './';

export default { title: 'Icons' };

export const sample = (): JSX.Element => (
  <div style={{ backgroundColor: '#000' }}>
    <CloseIcon color="#fff" width="20px" height="20px" />
    <ErrorIcon color="#fff" width="20px" height="20px" />
    <InfoIcon color="#fff" width="20px" height="20px" />
    <SuccessIcon color="#fff" width="20px" height="20px" />
    <WarningIcon color="#fff" width="20px" height="20px" />
  </div>
);
