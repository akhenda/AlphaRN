import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { colors, images } from 'src/theme';
import styles from './styles/LoadingIndicatorStyles';


const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={colors.statusBarTranslucent} />
      <Image source={images.loading} style={styles.image} />
      <Animatable.Text
        duration={4000}
        animation="flash"
        easing="ease-in-out"
        iterationCount="infinite"
        style={styles.loadingText}
      >
        LOADING
      </Animatable.Text>
    </View>
  );
};

export default LoadingIndicator;
