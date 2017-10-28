import React from 'react';
import { shallow } from 'enzyme';

import Image from '../../../app/components/Image';

describe('App Component', () => {
  let wrapper;

  const props = {
    zoom: 50,
    src: 'image.jpg',
    imageWidth: 100,
  };

  beforeEach(() => {
    wrapper = shallow(<Image {...props} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add an img element', () => {
    expect(wrapper.find('img').length);
  });

  it('should set a width proportional to the zoom value', () => {
    const expected = 50;
    const { width } = wrapper.find('img').props().style;
    expect(width).toBe(expected);
  });
});
