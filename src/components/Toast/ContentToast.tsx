import React, { ReactNode, memo } from 'react';

interface ContentToast {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
}

// eslint-disable-next-line react/display-name
export const ContentToast: React.FC<ContentToast> = memo(
  ({ children, subtitle, title }) => {
    const clones = React.Children.map(children, (child: any) =>
      React.cloneElement(child, {
        subtitle,
        title,
        autoDismiss: false,
      })
    );
    return <>{clones}</>;
  }
);
