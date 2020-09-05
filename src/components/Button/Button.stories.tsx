import React from 'react';
import { Button } from './Button';
import { useToast } from 'react-toast-wnm';

export default {
  title: 'Button',
};

export const Sample = (): JSX.Element => <Button>Button Label</Button>;
export const MySample = (): JSX.Element => {
  const toast = useToast();
  return (
    <Button
      onClick={() => {
        toast({
          type: 'success',
        });
      }}
    >
      Button Label
    </Button>
  );
};
