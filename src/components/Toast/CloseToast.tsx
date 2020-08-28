import React, { ReactNode } from 'react';

interface CloseToast {
  children?: ReactNode;
  id?: string;
}

export const ActionsContent: React.FC<CloseToast> = ({ children, id }) => {
  const clones = React.Children.map(children, (child: any) =>
    React.cloneElement(child, {
      closeToast: () => console.log(id),
    })
  );
  return <>{clones}</>;
};
