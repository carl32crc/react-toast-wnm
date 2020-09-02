import React from 'react';
import { Toast } from './Toast';
import { Actions } from './components/Actions';

import {
  SuccessContent,
  ErrorContent,
  WarningContent,
  InfoContent,
} from './components/Content';

export default {
  title: 'Simple Toast/Default',
  argTypes: {
    borderRadius: {
      type: { name: 'string', required: false },
      description: 'Set your custom border radius',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '6px' },
      },
      control: 'text',
    },
    type: {
      type: { name: 'string', required: false },
      description: 'Set type toast',
      table: {
        type: {
          summary: `string ('default' | 'error' | 'warning' | 'success' | 'info')`,
        },
      },
      control: {
        type: 'select',
        options: ['default', 'error', 'warning', 'success', 'info'],
      },
    },
    enableAnimation: {
      type: { name: 'boolean', required: false },
      description: 'Enable or disable animation',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    subtitle: {
      type: { name: 'string', required: false },
      description: 'Set your custom subtitle',
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
    height: {
      type: { name: 'string', required: false },
      description: 'Set your custom height',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '104px' },
      },
      control: 'text',
    },
    padding: {
      type: { name: 'string', required: false },
      description: 'Set your custom padding',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '24px 32px' },
      },
      control: 'text',
    },
    title: {
      type: { name: 'string', required: false },
      description: 'Set your custom title',
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
    width: {
      type: { name: 'string', required: false },
      description: 'Set your custom width',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '456px' },
      },
      control: 'text',
    },
  },
};

export const Default = (args: any): JSX.Element => {
  const content = {
    default: <SuccessContent />,
    success: <SuccessContent />,
    error: <ErrorContent />,
    info: <InfoContent />,
    warning: <WarningContent />,
  };
  return (
    <Toast {...args} enableAnimation={false}>
      {{ actions: <Actions />, content: content[args.type] }}
    </Toast>
  );
};
Default.args = {
  borderRadius: '6px',
  height: '104px',
  padding: '24px 32px',
  subtitle: 'Default subtitle',
  title: 'Default title',
  type: 'success',
  width: '456px',
};
