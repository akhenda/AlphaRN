import { StyleSheet } from 'react-native';

import { colors } from 'src/theme';

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain',
  },
  logoText: {
    color: colors.primary.text,
    fontSize: 45,
  },
  pageTitle: {
    fontSize: 24,
    marginTop: 30,
    color: colors.primary.text,
    backgroundColor: 'transparent',
  },
  errorText: {
    position: 'absolute',
    bottom: 0,
    fontSize: 17,
    textAlign: 'center',
    marginHorizontal: 15,
    color: colors.secondary.main,
    backgroundColor: 'transparent',
  },
});

export default styles;
