import { StyleSheet } from 'react-native';

import { colors, metrics } from 'src/theme';

const styles = StyleSheet.create({
  imageContainer: {
    width: metrics.screenWidth * 0.7,
    height: metrics.screenWidth * 0.7,
    overflow: 'hidden',
    borderRadius: 500,
    backgroundColor: colors.secondary.main,
    elevation: 6,

    // iOS Drop Shadow
    borderWidth: 5,
    borderColor: colors.secondary.main,
    shadowColor: '#fff',
    shadowOffset: {
      width: 4,
      height: 7,
    },
    shadowRadius: 5,
    shadowOpacity: 0.8,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default styles;
