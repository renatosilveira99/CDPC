import { StyleSheet } from 'react-native';
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
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  title: {
    color: theme.colors.heading,
    fontSize: 40,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 25,
    lineHeight: 45,
    fontFamily: theme.fonts.title700
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 64,
    fontFamily: theme.fonts.title500
  }
});
