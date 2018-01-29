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
        image: this.renderImage(images.abstract1),
        title: 'Welcome',
        subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      },
      {
        backgroundColor: colors.primary.main,
        image: this.renderImage(images.abstract2),
        title: 'Donec',
        subtitle: 'Aenean commodo ligula eget dolor.',
      },
      {
        backgroundColor: colors.primary.light,
        image: this.renderImage(images.abstract3),
        title: 'Nullam',
        subtitle: 'Aenean imperdiet. Etiam ultricies nisi vel augue.',
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
