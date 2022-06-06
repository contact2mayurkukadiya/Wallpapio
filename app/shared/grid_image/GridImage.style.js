import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  imageContainer: {
    position: 'relative',
  },
  spinner: {
    position: 'absolute',
    ...StyleSheet.absoluteFillObject,
  },
});
