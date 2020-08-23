import React from 'react';
import { shallow } from 'enzyme';
import { Toast } from './Toast';

const sleep = (time = 1000): Promise<() => void> =>
  new Promise((r) => setTimeout(r, time));

describe('Toast', () => {
  it('onMouseEnter', () => {
    const onMouseEnter = jest.fn();
    const wrapper = shallow(<Toast onMouseEnter={onMouseEnter} />);
    wrapper.simulate('mouseEnter');
    expect(onMouseEnter.mock.calls).toEqual([[]]);
  });
  it('onMouseLeave', () => {
    const onMouseLeave = jest.fn();
    const wrapper = shallow(<Toast onMouseLeave={onMouseLeave} />);
    wrapper.simulate('mouseLeave');
    expect(onMouseLeave.mock.calls).toEqual([[]]);
  });
  it('title', () => {
    const title = 'Random title';
    const wrapper = shallow(<Toast title={title} />);
    const result = wrapper.find('h1').text().includes(title);
    expect(result).toEqual(true);
  });
  it('subtitle', () => {
    const subtitle = 'Random subtitle';
    const wrapper = shallow(<Toast subtitle={subtitle} />);
    const result = wrapper.find('h2').text().includes(subtitle);
    expect(result).toEqual(true);
  });
  it('remove toast', () => {
    const removeToast = jest.fn();
    const wrapper = shallow(<Toast removeToast={removeToast} />);
    wrapper.find('span').simulate('click');
    expect(removeToast.mock.calls).toEqual([[]]);
  });
});
