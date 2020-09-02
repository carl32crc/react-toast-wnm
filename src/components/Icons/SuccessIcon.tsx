import React from 'react';

export const SuccessIc = (props: any): JSX.Element => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    aria-labelledby="okIconTitle"
    stroke={props.color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <title id="okIconTitle">Ok</title> <polyline points="4 13 9 18 20 7" />
  </svg>
);
