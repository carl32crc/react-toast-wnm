import React, { ReactNode, memo } from 'react';

interface CloseToast {
  children?: ReactNode;
  id?: string;
}

// eslint-disable-next-line react/display-name
export const ActionsContent: React.FC<CloseToast> = memo(({ children, id }) => {
  const clones = React.Children.map(children, (child: any) =>
    React.cloneElement(child, {
      closeToast: () => console.log(id),
    })
  );
  return <>{clones}</>;
});
