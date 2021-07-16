import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 64,
    backgroundColor: theme.colors.darkGreen,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: getStatusBarHeight() + 10,
    marginBottom: 5,
    borderRadius: 8
  },
  title: {
    color: theme.colors.highlight,
    fontSize: 16,
    fontFamily: theme.fonts.title700
  },
});
