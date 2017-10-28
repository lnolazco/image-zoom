import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Image extends PureComponent {
  render() {
    const { src, alt, imageWidth, zoom } = this.props;

    const styles = {
      width: parseInt((imageWidth * zoom) / 100, 10),
    };

    return (
      <img
        src={src}
        alt={alt}
        style={styles}
      />
    );
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  zoom: PropTypes.number.isRequired,
  imageWidth: PropTypes.number.isRequired,
};

Image.defaultProps = {
  alt: '',
};

export default Image;
