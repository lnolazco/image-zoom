import { ZOOM_IN, ZOOM_OUT, CHANGE_IMAGE, UNSET_IMAGE } from '../actions/types';
import { ZOOM_MAX, ZOOM_MIN } from '../config/constants';

const initialState = {
  zoom: 100,
  imageSrc: '',
  imageWidth: 0,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case ZOOM_IN:
      if (state.zoom < ZOOM_MAX) {
        return { ...state, zoom: state.zoom + 5 };
      }
      return state;
    case ZOOM_OUT:
      if (state.zoom > ZOOM_MIN) {
        return { ...state, zoom: state.zoom - 5 };
      }
      return state;
    case CHANGE_IMAGE:
      return {
        ...state,
        imageSrc: action.imageSrc,
        imageWidth: action.imageWidth,
        zoom: action.zoom,
      };
    case UNSET_IMAGE:
      return initialState;
    default:
      return state;
  }
}
