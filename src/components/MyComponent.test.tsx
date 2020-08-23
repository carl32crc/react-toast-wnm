import React from 'react';
import { shallow } from 'enzyme';
import { MyComponent } from './MyComponent';

test('Renders', async () => {
  const wrapper = shallow(<MyComponent />);
  const result = wrapper.text().includes('My First Component');
  expect(result).toEqual(true);
});
