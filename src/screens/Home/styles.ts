import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  header: {
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
  headerTitle: {
    color: theme.colors.highlight,
    fontSize: 16,
    fontFamily: theme.fonts.title700
  },
  cardList: {
    width: '100%',
    marginLeft: 20,
    marginTop: 10
  }
});
