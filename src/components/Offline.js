import React from 'react';
import { View, Image, StatusBar, BackHandler } from 'react-native';
import { Button, Text } from 'native-base';

import { colors, images } from '../theme';
import styles from './styles/OfflineStyles';


const Offline = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={colors.statusBarTranslucent} />
      <Text style={styles.title}>No Internet Connection</Text>
      <Image source={images.noInternet} style={styles.image} />
      <Text style={styles.description}>
        We&apos;re sorry, there seems to be a problem with your internet connection.
        The application will resume as soon as it is able to reconnect to the internet.
      </Text>
      <Button rounded bordered style={styles.button} onPress={() => BackHandler.exitApp()}>
        <Text style={styles.buttonText}>Try Again</Text>
      </Button>
    </View>
  );
};

export default Offline;
