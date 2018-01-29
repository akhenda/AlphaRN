import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Onboarding from 'react-native-onboarding-swiper';

import { images, colors } from 'src/theme';
import { doneAppIntro } from 'src/state/actions/app';
import styles from './styles/WalkthroughScreenStyles';


class WalkthroughScreen extends Component {
  onDone = () => {
    this.props.doneAppIntro();
    Actions.auth();
    Actions.login();
  }

  renderImage(image) {
    return (
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
    );
  }

  render() {
    const pageArray = [
      {
        backgroundColor: colors.primary.dark,
        image: this.renderImage(images.discover),
        title: 'Discover',
        subtitle: 'Local businesses, artisans and initiatives',
      },
      {
        backgroundColor: colors.primary.main,
        image: this.renderImage(images.connect),
        title: 'Connect',
        subtitle: 'With inspiring and talented people',
      },
      {
        backgroundColor: colors.primary.light,
        image: this.renderImage(images.support),
        title: 'Support',
        subtitle: 'Causes you care about',
      },
    ];

    return (
      <Onboarding
        pages={pageArray}
        onSkip={this.onDone}
        onDone={this.onDone}
      />
    );
  }
}

WalkthroughScreen.propTypes = {
  doneAppIntro: PropTypes.func,
};

export default connect(null, { doneAppIntro })(WalkthroughScreen);
