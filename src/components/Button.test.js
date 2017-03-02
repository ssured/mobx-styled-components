import React from 'react';
import { observable } from 'mobx';

import { shallow } from 'enzyme';

import Button from './Button';

describe('<Button />', () => {
  test('should render a button with a classname', () => {
    const AppStyle = observable({
      background: 'blue',
    });
    const wrapper = shallow(<Button AppStyle={AppStyle} />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should render other class when style is provided', () => {
    const AppStyle = observable({
      background: 'blue',
    });
    const wrapper = shallow(<Button AppStyle={AppStyle} />);
    let html1, html2;
    expect(html1 = wrapper.html()).toMatchSnapshot();

    // trigger change in the global style
    AppStyle.background = 'red';
    expect(html2 = wrapper.html()).toMatchSnapshot();

    expect(html1).not.toEqual(html2);
  });
});
