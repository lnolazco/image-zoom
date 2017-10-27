import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeImage } from '../../actions/zoomActions';

class ImageSelector extends PureComponent {
  onChange = ({ target }) => {
    this.props.changeImage(target.value);
  }

  render() {
    return (
      <select onChange={this.onChange}>
        <option value="https://marvelapp.com/static/assets/images/onboarding/iphone6/Onboarding-invite.png">
          IPhone image</option>
        <option value="https://marvelapp.com/static/assets/images/onboarding/ipad/Onboarding-location.png">
          IPad image</option>
        <option value="https://marvelapp.com/static/assets/images/onboarding/web/Main-page.png">
          Desktop image</option>
      </select>
    );
  }
}

ImageSelector.propTypes = {
  changeImage: PropTypes.func.isRequired,
};

function mapStateToProperties(state) {
  return {
    imageSrc: state.zoomStore.imageSrc,
  };
}

function mapDispatchToProperties(dispatch) {
  return {
    changeImage: imageSrc => dispatch(changeImage(imageSrc)),
  };
}

export default connect(mapStateToProperties, mapDispatchToProperties)(ImageSelector);
