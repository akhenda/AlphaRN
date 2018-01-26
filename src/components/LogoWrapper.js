import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { View, Text } from 'native-base';

import { images } from 'src/theme';
import styles from './styles/LogoWrapperStyles';


class LogoWrapper extends Component {
  renderError() {
    const { error } = this.props;
    return error
      ? <Text style={styles.errorText}>{error}</Text>
      : null;
  }

  render() {
    return (
      <View style={styles.logoContainer}>
        <Image source={images.logo} style={styles.logo} />
        {this.renderError()}
      </View>
    );
  }
}

LogoWrapper.propTypes = {
  error: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default LogoWrapper;
