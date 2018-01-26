import { StyleSheet } from 'react-native';

import { colors } from 'src/theme';

const styles = StyleSheet.create({
  form: {
    flex: 1.8,
    padding: 20,
  },
  textInput: {
    marginBottom: 15,
  },
  textInputIcon: {
    marginLeft: 10,
    fontSize: 30,
    color: '#FEFEFE',
  },
  button: {
    marginBottom: 15,
  },
  textInputField: {
    color: 'white',
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forgotButton: {
    alignSelf: 'flex-end',
  },
  footerText: {
    fontSize: 12,
    color: colors.primary.lightest,
  },
});

export default styles;
