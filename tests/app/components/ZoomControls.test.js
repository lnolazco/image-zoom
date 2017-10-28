import React from 'react';
import { shallow } from 'enzyme';

import ZoomControls from '../../../app/components/ZoomControls';

describe('ZoomControls Component', () => {
  let wrapper;

  const props = {
    zoom: 75,
    zoomIn: jest.fn(),
    zoomOut: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<ZoomControls.WrappedComponent {...props} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should call zoomOut action when the button Zomm Out is clicked', () => {
    const btn = wrapper.find('button').at(0);
    btn.simulate('click');
    expect(props.zoomOut).toHaveBeenCalled();
  });

  it('should call zoomIn action when the button Zomm In is clicked', () => {
    const btn = wrapper.find('button').at(1);
    btn.simulate('click');
    expect(props.zoomIn).toHaveBeenCalled();
  });
});
