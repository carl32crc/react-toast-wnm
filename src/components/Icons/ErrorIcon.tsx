import React from 'react';

export const ErrorIcon = (props: any): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-labelledby="skullIconTitle"
    stroke={props.color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <title id="skullIconTitle">Skull</title>
    <path d="M16 17.9297C18.3912 16.5465 20 13.9611 20 11C20 6.58172 16.4183 3 12 3C7.58172 3 4 6.58172 4 11C4 13.9611 5.60879 16.5465 8 17.9297V21H16V17.9297Z" />
    <circle cx="8.5" cy="10.5" r="1" /> <circle cx="15.5" cy="10.5" r="1" />
    <path d="M11.5 15L12 14L12.5 15H11.5Z" />
  </svg>
);
