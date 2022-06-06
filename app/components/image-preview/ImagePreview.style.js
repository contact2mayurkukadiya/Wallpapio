import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  flex1: {
    flex: 1,
  },
  itemImage: {
    width: '100%',
    height: 'auto',
    aspectRatio: 9 / 16,
    backgroundColor: '#ffffff',
  },
  setButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 100,
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: 70,
    height: 70,
    borderRadius: 35,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
