import React from 'react';
import { Toast } from './Toast';

import { CustomContent } from './components/Content';

export default {
  title: 'Simple Toast/Custom',
  argTypes: {
    backgroundColor: {
      type: { name: 'string', required: false },
      description: 'Set your custom background color',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'color',
      },
    },
    borderRadius: {
      type: { name: 'string', required: false },
      description: 'Set your custom border radius',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '6px' },
      },
      control: 'text',
    },
    children: {
      type: { name: 'Object', required: false },
      description: `Sample: {{ actions: MyActionsReactElement, content: MyContentReactElement  }}`,
      table: {
        type: {
          summary: 'Object {actions: ReactElement, content: ReactElement}',
        },
      },
    },
    color: {
      type: { name: 'string', required: false },
      description: 'Set your custom text color',
      table: {
        type: { summary: 'string' },
      },
      control: 'color',
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
    id: {
      type: { name: 'string', required: false },
      description: 'Set id',
      table: {
        type: { summary: 'string' },
      },
    },
    onMouseEnter: {
      type: { name: 'function', required: false },
      description: 'Set your function onMouseEnter',
      table: {
        type: { summary: 'funcion (): void => {}' },
      },
    },
    onMouseLeave: {
      type: { name: 'function', required: false },
      description: 'Set your function onMouseLeave',
      table: {
        type: { summary: 'function (): void => {}' },
      },
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

export const Custom = (args): JSX.Element => {
  return (
    <Toast {...args} enableAnimation={false}>
      {{ content: <CustomContent /> }}
    </Toast>
  );
};
Custom.args = {
  backgroundColor: '#fff',
  borderRadius: '6px',
  color: '#000',
  height: '104px',
  padding: '24px 32px',
  subtitle: 'Default subtitle',
  title: 'Default title',
  width: '456px',
};
