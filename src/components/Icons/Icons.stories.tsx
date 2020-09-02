import * as React from 'react';
import { CloseIcon, ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '.';

export default {
  title: 'Icons',
  argTypes: {
    color: {
      type: { name: 'string', required: false },
      description: 'Set your custom color',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'color',
      },
    },
    width: {
      type: { name: 'string', required: false },
      description: 'Set your custom width',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    height: {
      type: { name: 'string', required: false },
      description: 'Set your custom height',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
  },
};

export const Sample = (args): JSX.Element => (
  <div style={{ backgroundColor: '#000' }}>
    <CloseIcon {...args} />
    <ErrorIcon {...args} />
    <InfoIcon {...args} />
    <SuccessIcon {...args} />
    <WarningIcon {...args} />
  </div>
);

Sample.args = {
  color: '#fff',
  height: '104px',
  width: '456px',
};
