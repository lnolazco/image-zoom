import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Image from '../Image';
import ImageSelector from '../ImageSelector';
import ZoomControls from '../ZoomControls';

export class AppContainer extends Component {
  render() {
    const { zoom, imageSrc } = this.props;

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
          />
        </div>
      </div>
    );
  }
}

AppContainer.propTypes = {
  zoom: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

function mapStateToProperties(state) {
  return {
    zoom: state.zoomStore.zoom,
    imageSrc: state.zoomStore.imageSrc,
  };
}

export default connect(mapStateToProperties)(AppContainer);
