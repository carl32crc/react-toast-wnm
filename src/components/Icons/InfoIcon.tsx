import React from 'react';

export const InfoIcon = (props: any): JSX.Element => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    aria-labelledby="infoIconTitle"
    stroke={props.color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <title id="infoIconTitle">Information</title> <path d="M12,12 L12,15" />{' '}
    <line x1="12" y1="9" x2="12" y2="9" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);
