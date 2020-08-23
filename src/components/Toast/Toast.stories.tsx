import * as React from 'react';
import { Toast } from './Toast';

export default { title: 'Toast' };

export const toastsEmpty = (): JSX.Element => (
  <>
    <Toast type="success" />
    <Toast type="warning" />
    <Toast type="info" />
    <Toast type="error" />
    <Toast />
  </>
);

export const toastsWithTitleAndSubtitle = (): JSX.Element => (
  <>
    <Toast
      type="success"
      title="Success notification title"
      subtitle="Text second level"
    />
    <Toast
      type="warning"
      title="Warning notification title"
      subtitle="Text second level"
    />
    <Toast
      type="info"
      title="Info notification title"
      subtitle="Text second level"
    />
    <Toast
      type="error"
      title="Error notification title"
      subtitle="Text second level"
    />
    <Toast title="Default notification title" subtitle="Text second level" />
  </>
);
