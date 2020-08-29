import React from 'react';
import { shallow, mount } from 'enzyme';
import { Toast } from './Toast';
import { successToast, errorToast } from './components';

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
    const wrapper = mount(<Toast title={title}>{successToast}</Toast>);
    const result = wrapper.find('div').at(0).text().includes(title);
    expect(result).toEqual(true);
  });
  it('id', () => {
    const id = 'aksjdalksj9239874';
    const wrapper = mount(<Toast id={id} />);
    const result = wrapper.prop('id');
    expect(result).toEqual(id);
  });
  it('subtitle', () => {
    const subtitle = 'Random subtitle';
    const wrapper = mount(<Toast subtitle={subtitle}>{errorToast}</Toast>);
    const result = wrapper.find('div').at(0).text().includes(subtitle);
    expect(result).toEqual(true);
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
