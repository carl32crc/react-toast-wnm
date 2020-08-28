import React from 'react';
import { shallow } from 'enzyme';
import {
  SuccessContent,
  ErrorContent,
  InfoContent,
  WarningContent,
  CustomContent,
} from './Content';

describe('content', () => {
  it('success content', () => {
    const title = 'Random title';
    const subtitle = 'Random subtitle';
    const wrapper = shallow(
      <SuccessContent title={title} subtitle={subtitle} />
    );
    const resultTitle = wrapper.find('div').at(0).text().includes(title);
    const resultSubtitle = wrapper.find('div').at(0).text().includes(subtitle);
    expect(resultTitle).toEqual(true);
    expect(resultSubtitle).toEqual(true);
  });
  it('error content', () => {
    const title = 'Random title';
    const subtitle = 'Random subtitle';
    const wrapper = shallow(<ErrorContent title={title} subtitle={subtitle} />);
    const resultTitle = wrapper.find('div').at(0).text().includes(title);
    const resultSubtitle = wrapper.find('div').at(0).text().includes(subtitle);
    expect(resultTitle).toEqual(true);
    expect(resultSubtitle).toEqual(true);
  });
  it('info content', () => {
    const title = 'Random title';
    const subtitle = 'Random subtitle';
    const wrapper = shallow(<InfoContent title={title} subtitle={subtitle} />);
    const resultTitle = wrapper.find('div').at(0).text().includes(title);
    const resultSubtitle = wrapper.find('div').at(0).text().includes(subtitle);
    expect(resultTitle).toEqual(true);
    expect(resultSubtitle).toEqual(true);
  });
  it('warning content', () => {
    const title = 'Random title';
    const subtitle = 'Random subtitle';
    const wrapper = shallow(
      <WarningContent title={title} subtitle={subtitle} />
    );
    const resultTitle = wrapper.find('div').at(0).text().includes(title);
    const resultSubtitle = wrapper.find('div').at(0).text().includes(subtitle);
    expect(resultTitle).toEqual(true);
    expect(resultSubtitle).toEqual(true);
  });
  it('custom content', () => {
    const title = 'Random title';
    const subtitle = 'Random subtitle';
    const wrapper = shallow(
      <CustomContent title={title} subtitle={subtitle} />
    );
    const resultTitle = wrapper.find('div').at(0).text().includes(title);
    const resultSubtitle = wrapper.find('div').at(0).text().includes(subtitle);
    expect(resultTitle).toEqual(true);
    expect(resultSubtitle).toEqual(true);
  });
});
