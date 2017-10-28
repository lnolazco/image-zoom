import React from 'react';
import { shallow } from 'enzyme';

import App from '../../../app/components/App';

describe('App Component', () => {
  let wrapper;

  const props = {
    zoom: 100, imageSrc: '', imageWidth: 0,
  };

  beforeEach(() => {
    wrapper = shallow(<App.WrappedComponent {...props} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add an image selector', () => {
    expect(wrapper.find('ImageSelector').length);
  });

  it('should add zoom controls', () => {
    expect(wrapper.find('ZoomControls').length);
  });

  it('should add an image', () => {
    expect(wrapper.find('Image').length);
  });
});
