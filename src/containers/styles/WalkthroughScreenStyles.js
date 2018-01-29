import { StyleSheet } from 'react-native';

import { metrics } from 'src/theme';

const styles = StyleSheet.create({
  imageContainer: {
    width: metrics.screenWidth * 0.7,
    height: metrics.screenWidth * 0.7,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default styles;
