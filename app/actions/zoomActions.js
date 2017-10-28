import { ZOOM_IN, ZOOM_OUT, CHANGE_IMAGE, UNSET_IMAGE } from './types';
import { ZOOM_MAX, ZOOM_MIN } from '../config/constants';

function determineZoom(zoom) {
  if (zoom > ZOOM_MIN && zoom < ZOOM_MAX) return zoom;
  if (zoom < ZOOM_MIN) return ZOOM_MIN;
  return ZOOM_MAX;
}

function zoomIn() {
  return {
    type: ZOOM_IN,
  };
}

function zoomOut() {
  return {
    type: ZOOM_OUT,
  };
}

function changeImage(imageSrc, imageWidth, zoom) {
  return {
    type: CHANGE_IMAGE,
    imageSrc,
    imageWidth,
    zoom: determineZoom(zoom),
  };
}

function unsetImage() {
  return {
    type: UNSET_IMAGE,
  };
}

export {
  zoomIn,
  zoomOut,
  changeImage,
  unsetImage,
};
