import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setZoom } from '../../actions/zoomActions';

class Image extends PureComponent {
  state = {
    loading: true,
  }

  componentDidMount() {
    this.image.addEventListener('load', () => {
      console.log('clientWidth', this.image.clientWidth, window.innerWidth);
      const zoom = Math.floor(((window.innerWidth / this.image.clientWidth) * 100) / 5) * 5;
      console.log(zoom);
      this.props.setZoom(zoom, parseInt((this.image.clientWidth * zoom) / 100, 10));
      this.setState({ loading: false, width: this.image.clientWidth });
    });
  }

  refImage = (image) => { this.image = image; }

  render() {
    const { src, zoom } = this.props;
    const styles = {};

    if (!this.state.loading) {
      styles.width = parseInt((this.state.width * zoom) / 100, 10);
    }

    return (
      <img
        ref={this.refImage}
        src={src}
        alt=""
        className="image"
        style={styles}
      />
    );
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  zoom: PropTypes.number.isRequired,
  imageWidth: PropTypes.number.isRequired,
  setZoom: PropTypes.func.isRequired,
};

function mapStateToProperties(state) {
  return {
    imageWidth: state.zoomStore.imageWidth,
  };
}

function mapDispatchToProperties(dispatch) {
  return {
    setZoom: (zoom, imageWidth) => dispatch(setZoom(zoom, imageWidth)),
  };
}

export default connect(mapStateToProperties, mapDispatchToProperties)(Image);
