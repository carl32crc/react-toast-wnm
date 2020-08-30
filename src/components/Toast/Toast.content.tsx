import React, { ReactNode, memo, ReactElement } from 'react';

interface ContentToast {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
}

// eslint-disable-next-line react/display-name
export const Content: React.FC<ContentToast> = memo(
  ({ children, subtitle, title }) => {
    const clones = React.Children.map(children, (child: ReactElement) =>
      React.cloneElement(child, {
        subtitle,
        title,
      })
    );
    return <>{clones}</>;
  }
);
