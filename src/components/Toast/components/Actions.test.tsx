import React from 'react';
import { shallow } from 'enzyme';
import { Actions, CustomAct } from './Actions';

describe('actions', () => {
  it('close action', () => {
    const closeToast = jest.fn();
    const wrapper = shallow(<Actions closeToast={closeToast} />);
    wrapper.simulate('click');
    expect(closeToast.mock.calls).toEqual([[]]);
  });
  it('close action custom', () => {
    const closeToast = jest.fn();
    const wrapper = shallow(<CustomAct closeToast={closeToast} />);
    wrapper.simulate('click');
    expect(closeToast.mock.calls).toEqual([[]]);
  });
});
