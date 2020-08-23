import React from 'react';
import { shallow, mount } from 'enzyme';
import { Toast } from './Toast';

// const sleep = (time = 1000): Promise<() => void> =>
//   new Promise((r) => setTimeout(r, time));

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
    const result = wrapper.find('div').at(0).text().includes(title);
    expect(result).toEqual(true);
  });
  it('subtitle', () => {
    const subtitle = 'Random subtitle';
    const wrapper = shallow(<Toast subtitle={subtitle} />);
    const result = wrapper.find('div').at(0).text().includes(subtitle);
    expect(result).toEqual(true);
  });
  it('remove toast', () => {
    const removeToast = jest.fn();
    const wrapper = shallow(<Toast removeToast={removeToast} />);
    wrapper.find('span').simulate('click');
    expect(removeToast.mock.calls).toEqual([[]]);
  });
  it('action', () => {
    const action = jest.fn();
    const wrapper = shallow(<Toast action={action} />);
    wrapper.find('button').at(0).simulate('click');
    expect(action.mock.calls).toEqual([[]]);
  });
  it('cancel action', () => {
    const cancelAction = jest.fn();
    const wrapper = shallow(<Toast cancelAction={cancelAction} />);
    wrapper.find('button').at(0).simulate('click');
    expect(cancelAction.mock.calls).toEqual([[]]);
  });
  it('width', () => {
    const wrapper = mount(<Toast width="750px" />);
    const result = wrapper.prop('width');
    expect(result).toEqual('750px');
  });
  it('height', () => {
    const wrapper = mount(<Toast height="50px" />);
    const result = wrapper.prop('height');
    expect(result).toEqual('50px');
  });
  it('position', () => {
    const wrapper = mount(<Toast position="top-center" />);
    const result = wrapper.prop('position');
    expect(result).toEqual('top-center');
  });
  it('type', () => {
    const wrapper = mount(<Toast type="success" />);
    const result = wrapper.prop('type');
    expect(result).toEqual('success');
  });
});
