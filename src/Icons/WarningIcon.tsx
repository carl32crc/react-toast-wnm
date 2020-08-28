import React from 'react';

export const WarningIc = (props: any): JSX.Element => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    aria-labelledby="spamIconTitle"
    stroke={props.color}
    strokeWidth="1"
    strokeLinecap="square"
    strokeLinejoin="miter"
    fill="none"
    {...props}
  >
    <title id="spamIconTitle">Spam</title>
    <polygon points="16 3 21 8 21 16 16 21 8 21 3 16 3 8 8 3" />
    <path d="M12,8 L12,13" /> <line x1="12" y1="16" x2="12" y2="16" />
  </svg>
);
