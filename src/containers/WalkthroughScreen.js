import React, { Component } from 'react';
import { Image, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

import { images, colors } from 'src/theme';
import styles from './styles/WalkthroughScreenStyles';


class WalkthroughScreen extends Component {
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
        image: this.renderImage(images.abstract1),
        title: 'Discover',
        subtitle: 'Local businesses, artisans and initiatives',
      },
      {
        backgroundColor: colors.primary.main,
        image: this.renderImage(images.abstract2),
        title: 'Connect',
        subtitle: 'With inspiring and talented people',
      },
      {
        backgroundColor: colors.primary.light,
        image: this.renderImage(images.abstract3),
        title: 'Support',
        subtitle: 'Causes you care about',
      },
    ];

    return (
      <Onboarding pages={pageArray} />
    );
  }
}

export default WalkthroughScreen;
