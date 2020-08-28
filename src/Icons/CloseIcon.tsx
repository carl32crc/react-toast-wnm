import React from 'react';

export const CloseIcon = (props: any): JSX.Element => (
  <>
    <svg
      role="img"
      viewBox="0 0 24 24"
      aria-labelledby="closeIconTitle"
      stroke={props.color}
      strokeWidth="1"
      strokeLinecap="square"
      strokeLinejoin="miter"
      fill="none"
      {...props}
    >
      <title id="closeIconTitle">Close</title>
      <path d="M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575" />
    </svg>
  </>
);
