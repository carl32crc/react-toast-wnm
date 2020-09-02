import { style, keyframes } from 'typestyle';

const animationToastRight = keyframes({
  from: {
    transform: 'translateX(100%)',
  },
  to: {
    transform: 'translateX(0)',
  },
});

const animationToastLeft = keyframes({
  from: {
    transform: 'translateX(-100%)',
  },
  to: {
    transform: 'translateX(0)',
  },
});

const animationToastTop = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
});

const animationToastBottom = keyframes({
  from: {
    transform: 'translateY(100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
});

type toastPositionStyle = {
  [position: string]: string;
};

type containerPositionStyle = {
  [position: string]: string;
};

type containerAnimationStyle = {
  [position: string]: string;
};

type toastType = {
  [type: string]: string;
};

export const closeIcon = style({
  cursor: 'pointer',
});

export const toastContainer = style({
  position: 'fixed',
  zIndex: 2000,
  $nest: {
    '> div:last-child': {
      marginBottom: 0,
    },
  },
});

export const wrapperToastGenericStyles = style({
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontFamily: 'Roboto, sans-serif',
  height: '50px',
  $nest: {
    ':last-child': {
      marginBottom: 0,
    },
  },
});

export const notification = style({
  background: '#fff',
  transition: '.3s ease',
  position: 'relative',
  margin: '0 0 6px',
  marginBottom: '15px',
  boxShadow: '0px 16px 32px rgba(0, 0, 0, 0.12)',
});

export const content = style({
  display: 'flex',
  alignItems: 'center',
  $nest: {
    '> div > div:first-child': {
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '32px',
      letterSpacing: '0.006em',
    },
    '> div > div:last-child': {
      fontSize: '14px',
      lineHeight: '24px',
      letterSpacing: '0.006em',
    },
  },
});

export const myCustomActionsStyles = style({
  display: 'flex',
  alignItems: 'center',
  $nest: {
    '> button:first-child': {
      marginRight: '15px',
    },
  },
});

export const myCustomContentStyles = style({
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Roboto, sans-serif',
});

export const leftIcon = style({
  marginRight: '16px',
});

// CONTAINER TOAST

const containerBottomCenter = style({
  left: '50%',
  bottom: '15px',
  transform: 'translate(-50%, 0px)',
});

const containerBottomLeft = style({
  bottom: '15px',
  left: '15px',
});

const containerBottomRight = style({
  bottom: '15px',
  right: '15px',
});

const containerTopCenter = style({
  left: '50%',
  top: '15px',
  transform: 'translate(-50%, 0px)',
});

const containerTopLeft = style({
  top: '15px',
  left: '15px',
});

const containerTopRight = style({
  top: '15px',
  right: '15px',
});

// TOAST ANIMATION

const animationBottomCenter = style({
  animationDuration: '.7s',
  animationIterationCount: 'ease-in-out',
  animationName: animationToastBottom,
});

const animationBottomLeft = style({
  animationDuration: '.7s',
  animationIterationCount: 'ease-in-out',
  animationName: animationToastLeft,
});

const animationBottomRight = style({
  animationDuration: '.7s',
  animationIterationCount: 'ease-in-out',
  animationName: animationToastRight,
});

const animationTopCenter = style({
  animationDuration: '.7s',
  animationIterationCount: 'ease-in-out',
  animationName: animationToastTop,
});

const animationTopLeft = style({
  animationDuration: '.7s',
  animationIterationCount: 'ease-in-out',
  animationName: animationToastLeft,
});

const animationTopRight = style({
  animationDuration: '.7s',
  animationIterationCount: 'ease-in-out',
  animationName: animationToastRight,
});

// TOAST POSITION

const toastBottomCenter = style({
  left: '0',
  bottom: '0',
});

const toastBottomLeft = style({
  bottom: '0',
  left: '0',
});

const toastBottomRight = style({
  bottom: '0',
  right: '0',
});

const toastTopCenter = style({
  left: '0',
  top: '0',
});

const toastTopLeft = style({
  top: '0',
  left: '0',
});

const toastTopRight = style({
  top: '0',
  right: '0',
});

export const toastPosition: toastPositionStyle = {
  ['bottom-center']: toastBottomCenter,
  ['bottom-left']: toastBottomLeft,
  ['bottom-right']: toastBottomRight,
  ['top-center']: toastTopCenter,
  ['top-left']: toastTopLeft,
  ['top-right']: toastTopRight,
};

export const toastAnimation: containerAnimationStyle = {
  ['bottom-center']: animationBottomCenter,
  ['bottom-left']: animationBottomLeft,
  ['bottom-right']: animationBottomRight,
  ['top-center']: animationTopCenter,
  ['top-left']: animationTopLeft,
  ['top-right']: animationTopRight,
};

export const containerPosition: containerPositionStyle = {
  ['bottom-center']: containerBottomCenter,
  ['bottom-left']: containerBottomLeft,
  ['bottom-right']: containerBottomRight,
  ['top-center']: containerTopCenter,
  ['top-left']: containerTopLeft,
  ['top-right']: containerTopRight,
};

const COLORS = {
  DANGER: '#CC2964',
  SUCCESS: '#00825B',
  WARNING: '#DDBB64',
  INFO: '#176AE5',
  DEFAULT_BLACK: '#000',
  DEFAULT_WHITE: '#FFF',
};

const error = style({
  backgroundColor: COLORS.DANGER,
});

const info = style({
  backgroundColor: COLORS.INFO,
});

const success = style({
  backgroundColor: COLORS.SUCCESS,
});

const warning = style({
  backgroundColor: COLORS.WARNING,
});

const defaultBlack = style({
  backgroundColor: COLORS.DEFAULT_BLACK,
});

export const toastType: toastType = {
  error,
  info,
  success,
  warning,
  default: defaultBlack,
};
