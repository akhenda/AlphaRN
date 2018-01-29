import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import { Button, Text } from 'native-base';

import { colors, images } from '../theme';
import styles from './styles/OfflineStyles';


/* eslint-disable no-alert */
const Offline = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={colors.statusBarTranslucent} />
      <Text style={styles.title}>No Internet Connection</Text>
      <Image source={images.noInternet} style={styles.image} />
      <Text style={styles.description}>
        No internet connection found.{'\n'}Please check your connection.
      </Text>
      <Button rounded bordered style={styles.button} onPress={() => alert('Retrying...')}>
        <Text style={styles.buttonText}>Try Again</Text>
      </Button>
    </View>
  );
};

export default Offline;
