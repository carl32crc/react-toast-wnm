import React from 'react';
import { myCustomContentStyles } from '../Toast.style';

export default {
  title: 'Custom Toast Config/Content',
};

export const CustomContent = (): JSX.Element => (
  <div className={myCustomContentStyles}>
    <div>My custom title</div>
    <div>My custom subtitle</div>
  </div>
);
