import zoomReducer from '../../../app/reducers/zoomReducer';
import { ZOOM_IN, ZOOM_OUT, CHANGE_IMAGE, UNSET_IMAGE } from '../../../app/actions/types';

describe('Zoom Reducer', () => {
  it('should zoom in', () => {
    const initialState = {
      zoom: 50,
      imageSrc: '',
      imageWidth: 0,
    };

    const action = { type: ZOOM_IN };
    const expectedZoom = 55;

    expect(zoomReducer(initialState, action).zoom).toEqual(expectedZoom);
  });

  it('should zoom out', () => {
    const initialState = {
      zoom: 100,
      imageSrc: '',
      imageWidth: 0,
    };

    const action = { type: ZOOM_OUT };
    const expectedZoom = 95;

    expect(zoomReducer(initialState, action).zoom).toEqual(expectedZoom);
  });

  it('should change image', () => {
    const initialState = {
      zoom: 100,
      imageSrc: '',
      imageWidth: 0,
    };

    const action = {
      type: CHANGE_IMAGE,
      imageSrc: 'newImage',
      imageWidth: 100,
      zoom: 60,
    };

    const expectedState = {
      zoom: 60,
      imageSrc: 'newImage',
      imageWidth: 100,
    };

    expect(zoomReducer(initialState, action)).toEqual(expectedState);
  });

  it('should restore initial state for unset image action', () => {
    const initialState = {
      zoom: 60,
      imageSrc: 'newImage',
      imageWidth: 100,
    };

    const action = { type: UNSET_IMAGE };

    const expectedState = {
      zoom: 100,
      imageSrc: '',
      imageWidth: 0,
    };

    expect(zoomReducer(initialState, action)).toEqual(expectedState);
  });
});
