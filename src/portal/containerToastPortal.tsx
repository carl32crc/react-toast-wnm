import React from 'react';
import { render } from 'react-dom';
import { ToastsContainer } from 'components/Toast/ToastsContainer';

const portalIdElement = 'container-toasts';

export function containerToastPortal(): void {
  let portal: HTMLElement;
  const existingPortal = document.getElementById(portalIdElement);

  if (existingPortal) {
    portal = existingPortal;
  } else {
    const div = document.createElement('div');
    div.id = portalIdElement;
    document.body?.appendChild(div);
    portal = div;
  }

  render(<ToastsContainer />, portal);
}
