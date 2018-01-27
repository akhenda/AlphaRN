import { StyleSheet } from 'react-native';

import { colors } from 'src/theme';

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.secondary.main,
  },
  headerTitle: {
    color: colors.primary.text,
  },
});

export default styles;
