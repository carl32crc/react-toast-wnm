import React from 'react';
import { Button } from '../../Button';
import { myCustomActionsStyles } from '../Toast.style';

export default {
  title: 'Custom Toast Config/Actions',
  argTypes: {
    closeToast: {
      type: { name: 'string', required: false },
      description: `When you create a custom actions 
        component, a closeToast prop is injected into your component.`,
      table: {
        type: { summary: 'callback (optional)' },
      },
      controls: { hideNoControlsWarning: true },
    },
  },
};

export const CustomActions = ({ closeToast }): JSX.Element => (
  <div className={myCustomActionsStyles}>
    <Button onClick={closeToast}>Button label</Button>
    <Button>Other button</Button>
  </div>
);
