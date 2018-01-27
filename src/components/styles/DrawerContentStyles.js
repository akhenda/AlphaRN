import { StyleSheet } from 'react-native';

import { colors, metrics } from 'src/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary.text,
  },
  contentContainer: {},
  banner: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    height: metrics.screenHeight * 0.25,
  },
  bannerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bannerMask: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.statusBarTranslucentDark,
  },
  name: {
    fontSize: 24,
    marginRight: 20,
    fontWeight: '800',
    textAlign: 'right',
    color: colors.primary.text,
    backgroundColor: 'transparent',
  },
  profileButton: {
    margin: 20,
    alignSelf: 'flex-end',
  },
  avatar: {
    width: 80,
    height: 80,
    marginTop: -40,
    marginLeft: 30,
    borderWidth: 3,
    borderRadius: 40,
    resizeMode: 'cover',
    borderColor: colors.primary.text,
  },
  menuItems: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#FAFAFA',
  },
  menuItemIcon: {
    width: 32,
    fontSize: 22,
  },
  menuItemText: {
    fontSize: 16,
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  signOut: {
    padding: 20,
    marginTop: 30,
    paddingLeft: 30,
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
  },
});

export default styles;
