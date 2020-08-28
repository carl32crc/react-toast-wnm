import * as React from 'react';
import { Toast } from './Toast';
import {
  defaultToast,
  errorToast,
  infoToast,
  successToast,
  warningToast,
  customToast,
} from './components';

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
    >
      {{ content: successToast.content }}
    </Toast>
    <Toast
      type="warning"
      title="Warning notification title"
      subtitle="Text second level"
    >
      {{ content: warningToast.content }}
    </Toast>
    <Toast
      type="info"
      title="Info notification title"
      subtitle="Text second level"
    >
      {{ content: infoToast.content }}
    </Toast>
    <Toast
      type="error"
      title="Error notification title"
      subtitle="Text second level"
    >
      {{ content: errorToast.content }}
    </Toast>
    <Toast title="Default notification title" subtitle="Text second level">
      {{ content: defaultToast.content }}
    </Toast>
    <Toast
      backgroundColor="#fff"
      color="#000"
      title="Default notification title"
      subtitle="Text second level"
    >
      {{ content: customToast.content }}
    </Toast>
  </>
);

export const toastsWithCloseToast = (): JSX.Element => (
  <>
    <Toast
      type="success"
      title="Success notification title"
      subtitle="Text second level"
    >
      {successToast}
    </Toast>
    <Toast
      type="warning"
      title="Warning notification title"
      subtitle="Text second level"
    >
      {warningToast}
    </Toast>
    <Toast
      type="info"
      title="Info notification title"
      subtitle="Text second level"
      id="981ioj128731827kmd-3u2093u"
    >
      {infoToast}
    </Toast>
    <Toast
      type="error"
      title="Error notification title"
      subtitle="Text second level"
    >
      {errorToast}
    </Toast>
    <Toast title="Default notification title" subtitle="Text second level">
      {defaultToast}
    </Toast>
  </>
);
