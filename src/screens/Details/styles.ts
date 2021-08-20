import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  imageContainer: {
    marginTop: 35,
    height: 300,
    width: '98%',
  },
  image: {
    flex: 1,
    borderRadius: 10
  },
  info: {
    borderRadius: 10,
    marginTop: 10,
    width: '98%',
    height: 255,
    paddingHorizontal: 10
  },
  titleStyle: {
    fontSize: 24,
    marginTop: 10,
    fontFamily: theme.fonts.title700,
    textAlign: 'center'
  },
  subtitleStyle: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: theme.fonts.title500,
  },
  authorStyle: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: theme.fonts.text500,
  },
  dateStyle: {
    fontSize: 18,
    fontFamily: theme.fonts.text500,
  },
  campusStyle: {
    fontSize: 18,
    fontFamily: theme.fonts.text500,

  },
  infoDescription: {
    borderRadius: 10,
    marginTop: 20,
    width: '98%',
    paddingHorizontal: 10,
    marginBottom: 100
  },
  descriptionStyle: {
    fontSize: 16,
    fontFamily: theme.fonts.text400,
    textAlign: 'justify'
  }
});
