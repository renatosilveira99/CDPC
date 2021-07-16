import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  newsContainer: {
    width: '95%',
    height: 350,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  projectContainer: {
    width: '95%',
    height: 350,
    backgroundColor: theme.colors.red,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  image: {
    width: 372,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flex: 1
  },
  imageContainer: {
    flex: 2,
    borderRadius: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  contentTitle: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    color: theme.colors.highlight,
    fontSize: 20,
    marginBottom: 10,
    marginHorizontal: 10,
    textAlign: 'left',
    fontFamily: theme.fonts.title700
  },
  contentData: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 8
  },
  subtitle: {
    color: theme.colors.highlight,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: theme.fonts.title500
  }
});
