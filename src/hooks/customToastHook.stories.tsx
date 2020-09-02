import React from 'react';
import { useToast } from './useToast';
import {
  myCustomContentStyles,
  myCustomActionsStyles,
} from '../components/Toast/Toast.style';
import { Button } from '../components/Button';

export default {
  title: 'Custom Toast Config/Custom Toast Hook',
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
    autoDismiss: {
      type: { name: 'boolean', required: false },
      description: 'Set enable o disable',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      control: { type: 'inline-radio', options: [true, false] },
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

const CustomContent = (): JSX.Element => (
  <div className={myCustomContentStyles}>
    <div>My custom title</div>
    <div>My custom subtitle</div>
  </div>
);

type props = {
  closeToast?: () => void;
  backgroundColor?: string;
  color?: string;
};

// eslint-disable-next-line prettier/prettier
const CustomActions: React.FC<props> = ({ closeToast, color, backgroundColor }): JSX.Element => (
  <div className={myCustomActionsStyles}>
    <Button style={{ backgroundColor, color }} onClick={closeToast}>
      Button label
    </Button>
    <Button style={{ backgroundColor, color }}>Other button</Button>
  </div>
);

export const customToast = (args: any): JSX.Element => {
  const toast = useToast();
  return (
    <Button
      onClick={(): void => {
        toast({
          ...args,
          actions: (
            <CustomActions
              color={args.color}
              backgroundColor={args.backgroundColor}
            />
          ),
          content: <CustomContent />,
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
  backgroundColor: '#fff',
  borderRadius: '6px',
  color: '#000',
  position: 'bottom-right',
  height: '104px',
  padding: '24px 32px',
  subtitle: 'Default subtitle',
  title: 'Default title',
  width: '456px',
};
