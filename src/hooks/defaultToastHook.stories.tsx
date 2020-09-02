import React from 'react';
import { useToast } from './useToast';
import { Button } from '../components/Button';

export default {
  title: 'Default Toast Config/Default Toast Hook',
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
    autoDismiss: {
      type: { name: 'boolean', required: false },
      description: 'Set enable o disable',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      control: { type: 'inline-radio', options: [true, false] },
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
    delay: {
      type: { name: 'number', required: false },
      description: 'Set seconds autodismiss',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '3000' },
      },
      control: 'number',
    },
    position: {
      type: { name: 'string', required: false },
      description: 'Set position toast',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'select',
        options: [
          'bottom-right',
          'bottom-center',
          'bottom-left',
          'top-right',
          'top-center',
          'top-left',
        ],
      },
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
    enableAnimation: {
      type: { name: 'boolean', required: false },
      description: 'Enable or disable animation',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      control: { type: 'inline-radio', options: [true, false] },
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

export const customToast = (args: any): JSX.Element => {
  const toast = useToast();
  return (
    <Button
      onClick={(): void => {
        toast({
          ...args,
        });
      }}
    >
      Create my custom toast
    </Button>
  );
};

customToast.args = {
  autoDismiss: true,
  enableAnimation: true,
  delay: 3000,
  type: 'success',
  borderRadius: '6px',
  position: 'bottom-right',
  height: '104px',
  padding: '24px 32px',
  subtitle: 'Default subtitle',
  title: 'Default title',
  width: '456px',
};
