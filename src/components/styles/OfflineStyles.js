import { StyleSheet } from 'react-native';

import { colors } from 'src/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(252, 252, 252)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '60%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    marginBottom: 15,
  },
  
  description: {
    fontSize: 13,
    marginTop: 20,
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: colors.lightestText,
  },
  button: {
    alignSelf: 'center',
    marginVertical: 30,
  },
});

export default styles;
