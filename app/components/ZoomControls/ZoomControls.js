import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { zoomIn, zoomOut } from '../../actions/zoomActions';

class ZoomControls extends PureComponent {
  render() {
    const { zoom } = this.props;

    return [
      <button key="zoom-in" onClick={this.props.zoomIn}>+</button>,
      <span key="zoom-value">{zoom} %</span>,
      <button key="zoom-out" onClick={this.props.zoomOut}>-</button>,
    ];
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
