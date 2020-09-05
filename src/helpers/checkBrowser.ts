/* eslint-disable prettier/prettier */
function checkWindowSSR(): boolean {
  return Boolean(
    typeof window !== 'undefined'
    && window.document
    && window.document.createElement
  );
}

export const isBrowser = checkWindowSSR();
