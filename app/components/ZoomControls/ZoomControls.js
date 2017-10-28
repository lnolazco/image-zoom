import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { zoomIn, zoomOut } from '../../actions/zoomActions';
import { ZOOM_MIN, ZOOM_MAX } from '../../config/constants';

class ZoomControls extends PureComponent {
  render() {
    const { zoom } = this.props;

    return (
      <div>
        <button onClick={this.props.zoomOut} disabled={zoom === ZOOM_MIN}>-</button>
        <span>{zoom} %</span>
        <button onClick={this.props.zoomIn} disabled={zoom === ZOOM_MAX}>+</button>
      </div>
    );
  }
}

ZoomControls.propTypes = {
  zoom: PropTypes.number.isRequired,
  zoomIn: PropTypes.func.isRequired,
  zoomOut: PropTypes.func.isRequired,
};

function mapStateToProperties(state) {
  return {
    zoom: state.zoomStore.zoom,
  };
}

function mapDispatchToProperties(dispatch) {
  return {
    zoomIn: () => dispatch(zoomIn()),
    zoomOut: () => dispatch(zoomOut()),
  };
}

export default connect(mapStateToProperties, mapDispatchToProperties)(ZoomControls);
