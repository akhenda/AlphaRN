import { StyleSheet, Platform } from 'react-native';

import { colors, metrics } from 'src/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary.text,
  },
  content: {
    flex: 1,
  },
  headerBanner: {
    height: metrics.screenHeight * 0.33,
    alignItems: 'center',
  },
  banner: {
    width: metrics.screenWidth,
    height: metrics.screenHeight * 0.33,
    resizeMode: 'cover',
  },
  backgroundMask: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.statusBarTranslucentDarker,
  },
  avatar: {
    width: 80,
    height: 80,
    borderWidth: 5,
    marginTop: -40,
    borderRadius: 40,
    resizeMode: 'cover',
    borderColor: colors.primary.text,
  },
  leftMenuButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 15 : 20,
    left: 3,
  },
  rightMenuButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 15 : 20,
    right: 3,
  },
  menuButton: {
    color: colors.primary.text,
  },
  info: {
    padding: 15,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 10,
  },
  bio: {
    fontSize: 13,
    marginBottom: 15,
    textAlign: 'center',
    color: colors.lightestText,
  },
  button: {
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'center',
    borderColor: colors.primary.lighter, 
  },
  buttonText: {
    color: colors.primary.main,
  },
  
  itemWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemContainer: {
    width: metrics.screenWidth / 3,
    height: metrics.screenWidth / 3,
    // margin: metrics.screenWidth / (4/600),
  },
  itemLoading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary.lightest,
  },
  item: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  itemTextContainer: {
    width: metrics.screenWidth / 3,
    height: metrics.screenWidth / 3,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    padding: 5,
    fontSize: 17,
    borderRadius: 5,
    textAlign: 'center',
    color: colors.primary.text,
    textAlignVertical: 'center',
    backgroundColor: colors.statusBarTranslucentDark,
  },
  
  empty: {
    justifyContent: 'center',
    width: metrics.screenWidth,
    height: metrics.screenHeight * 0.35,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.lightestText,
  },
});

export default styles;
