import { Dimensions, StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  boxTop: {
    height: Dimensions.get('window').height / 3,
    width: '100%',
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxMid: {
    height: Dimensions.get('window').height / 4,
    // backgroundColor:'blue',
    width: '100%',
    paddingHorizontal: 37,
  },
  boxBottom: {
    height: Dimensions.get('window').height / 3,
    // backgroundColor:'green',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  titleInput: {
    marginLeft: 5,
    color: themas.Colors.gray,
    marginTop: 20
  },
  textInput: {
    fontSize: 16,
    color: themas.Colors.gray
  },
  boxInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: themas.Colors.lightGray,
    backgroundColor: themas.Colors.bgScreen,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  logo: {
    width: 80,
    height: 80
  },
  text: {
    fontWeight: 'bold',
    marginTop: 40,
    fontSize: 18
  },
  input: {
    // backgroundColor:'red',
    height: '100%',
    width: '100%',
    borderRadius: 40,
    // paddingHorizontal:20
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: themas.Colors.primary,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  textButton: {
    color: themas.Colors.secondary,
    fontWeight: 'bold',
    fontSize: 16
  },
  textBottom: {
    fontSize: 16,
    color: themas.Colors.gray
  },
  textBottomCreate: {
    fontSize: 16,
    color: themas.Colors.primary
  }
});