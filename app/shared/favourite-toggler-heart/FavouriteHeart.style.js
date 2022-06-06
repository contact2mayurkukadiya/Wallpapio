import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    heart: {
        width: 50,
        height: 50
      },
      heartShape: {
        width: '55%',
        height: '85%',
        position: 'absolute',
        top: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#6427d1',
      },
      leftHeart: {
        transform: [
            {rotate: '-45deg'}
        ],
        left: 12
      },
      rightHeart: {
        transform: [
            {rotate: '45deg'}
        ],
        right: 12
      }
});
