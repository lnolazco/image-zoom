import { ZOOM_IN, ZOOM_OUT, CHANGE_IMAGE, SET_ZOOM } from './types';

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

function changeImage(imageSrc) {
  return {
    type: CHANGE_IMAGE,
    imageSrc,
  };
}

function setZoom(zoom, imageWidth) {
  return {
    type: SET_ZOOM,
    zoom,
    imageWidth,
  };
}

export {
  zoomIn,
  zoomOut,
  changeImage,
  setZoom,
};
