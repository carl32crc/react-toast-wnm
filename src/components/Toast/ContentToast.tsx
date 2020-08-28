import React, { ReactNode } from 'react';

interface ContentToast {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
}

export const ContentToast: React.FC<ContentToast> = ({
  children,
  subtitle,
  title,
}) => {
  const clones = React.Children.map(children, (child: any) =>
    React.cloneElement(child, {
      subtitle,
      title,
    })
  );
  return <>{clones}</>;
};
