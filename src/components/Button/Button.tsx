import React, { ReactNode } from 'react';
import { style } from 'typestyle';

const buttonLink = style({
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: '0.01em',
  color: '#0A0A0A',
  alignSelf: 'center',
  outline: 'none',
  border: 0,
  borderBottom: '2px solid #0A0A0A',
  backgroundColor: '#fff',
  padding: 0,
  cursor: 'pointer',
  $nest: {
    '&:hover': {
      color: '#757575',
      borderBottom: '2px solid #757575',
    },
  },
});

type props = {
  children?: ReactNode;
  onClick?: () => void;
  style?: object;
};

// eslint-disable-next-line prettier/prettier
export const Button: React.FC<props> = ({ children, onClick, style }): JSX.Element => (
  <button style={style} className={buttonLink} onClick={onClick}>
    {children}
  </button>
);
