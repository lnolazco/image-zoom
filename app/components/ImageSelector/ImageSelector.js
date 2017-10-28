import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { imagesList } from '../../config/constants';
import { changeImage, unsetImage } from '../../actions/zoomActions';

class ImageSelector extends PureComponent {
  static getImageWidth(path) {
    return new Promise((resolve, reject) => {
      try {
        const img = new Image();
        img.onload = () => {
          resolve(img.width);
        };
        img.src = path;
      } catch (error) {
        reject(error);
      }
    });
  }

  onChange = ({ target }) => {
    const imageSrc = target.value;

    this.props.unsetImage();

    if (!imageSrc) {
      return;
    }

    ImageSelector.getImageWidth(imageSrc)
    .then((width) => {
      const zoom = Math.floor(((window.innerWidth / width) * 100) / 5) * 5;

      this.props.changeImage(imageSrc, width, zoom);
    });
  }

  render() {
    return (
      <select onChange={this.onChange}>
        <option value="">Select</option>
        {
          imagesList.map(image => (
            <option
              key={image.label.split(' ').join('-')}
              value={image.imageSrc}
            >
              {image.label}
            </option>
          ))
        }
      </select>
    );
  }
}

ImageSelector.propTypes = {
  changeImage: PropTypes.func.isRequired,
  unsetImage: PropTypes.func.isRequired,
};

function mapStateToProperties(state) {
  return {
    imageSrc: state.zoomStore.imageSrc,
  };
}

function mapDispatchToProperties(dispatch) {
  return {
    changeImage: (imageSrc, imageWidth, zoom) => dispatch(changeImage(imageSrc, imageWidth, zoom)),
    unsetImage: () => dispatch(unsetImage()),
  };
}

export default connect(mapStateToProperties, mapDispatchToProperties)(ImageSelector);
