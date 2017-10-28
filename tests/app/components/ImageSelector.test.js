import React from 'react';
import { shallow } from 'enzyme';

import ImageSelector from '../../../app/components/ImageSelector';

describe('Image Selector Component', () => {
  let wrapper;

  const props = {
    changeImage: jest.fn(),
    unsetImage: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<ImageSelector.WrappedComponent {...props} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should called unsetImage action when the onChange method is called', () => {
    const event = { target: { value: '' } };
    wrapper.getElement().props.onChange(event);

    expect(props.unsetImage).toHaveBeenCalled();
    expect(props.changeImage.mock.calls.length).toBe(0);
  });

  it('should called changeImage action when the onChange method is called with a value selected', (done) => {
    const event = { target: { value: 'image-selected' } };

    const mockFn = () => new Promise(resolve => resolve(100));
    ImageSelector.WrappedComponent.getImageWidth = mockFn;

    wrapper.getElement().props.onChange(event);

    setTimeout(() => {
      expect(props.changeImage.mock.calls.length).toBe(1);
      done();
    }, 0);
  });
});
