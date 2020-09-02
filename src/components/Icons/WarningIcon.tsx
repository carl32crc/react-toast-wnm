import React from 'react';

export const WarningIc = (props: any): JSX.Element => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    aria-labelledby="dangerIconTitle"
    stroke={props.color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <title id="dangerIconTitle">Danger</title> <path d="M12 10L12 13" />
    <line x1="12" y1="16" x2="12" y2="16" />
    <path d="M12.8619342,4.46528817 L21.1135176,18.4929799 C21.3935371,18.969013 21.2346366,19.5819147 20.7586035,19.8619342 C20.6049268,19.9523322 20.4298761,20 20.2515834,20 L3.74841664,20 C3.19613189,20 2.74841664,19.5522847 2.74841664,19 C2.74841664,18.8217072 2.7960844,18.6466565 2.88648243,18.4929799 L11.1380658,4.46528817 C11.4180853,3.98925504 12.030987,3.83035459 12.5070201,4.11037408 C12.6535738,4.19658212 12.7757262,4.3187345 12.8619342,4.46528817 Z" />
  </svg>
);