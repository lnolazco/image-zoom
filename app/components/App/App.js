import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Image from '../Image';
import ImageSelector from '../ImageSelector';
import ZoomControls from '../ZoomControls';

class App extends PureComponent {
  render() {
    const { zoom, imageSrc, imageWidth } = this.props;

    return (
      <div className="app">
        <div className="app__controls">
          <div className="app__controls__selector">
            <ImageSelector />
          </div>
          <div className="app__controls__zoom">
            <ZoomControls />
          </div>
        </div>
        <div className="app__image">
          <Image
            src={imageSrc}
            zoom={zoom}
            imageWidth={imageWidth}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  zoom: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageWidth: PropTypes.number.isRequired,
};

function mapStateToProperties(state) {
  return {
    zoom: state.zoomStore.zoom,
    imageSrc: state.zoomStore.imageSrc,
    imageWidth: state.zoomStore.imageWidth,
  };
}

export default connect(mapStateToProperties)(App);
