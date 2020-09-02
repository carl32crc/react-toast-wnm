import React from 'react';

export const CloseIcon = (props: any): JSX.Element => (
  <>
    <svg
      role="img"
      viewBox="0 0 24 24"
      stroke={props.color}
      aria-labelledby="closeIconTitle"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title id="closeIconTitle">Close</title>
      <path d="M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575" />
    </svg>
  </>
);
