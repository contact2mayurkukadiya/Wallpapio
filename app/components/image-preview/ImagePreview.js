import React, {Component, useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './ImagePreview.style';
import GridImage from '../../shared/grid_image/GridImage';
import ManageWallpaper, {TYPE} from 'react-native-manage-wallpaper';
import * as helperService from '../../helper';
import BottomSheet from 'react-native-bottomsheet';

const ImagePreview = props => {
  const [activeImage, setActiveImage] = useState(props.route.params.item);
  const [isLoading, setIsLoading] = useState(false);

  const _callback = () => {
    setIsLoading(false);
    helperService.showToast('Wallpaper Set Successfully');
  };

  const setWallpaper = (image, type = TYPE.HOME) => {
    console.log(type);
    ManageWallpaper.setWallpaper({uri: image}, _callback, type);
  };

  const openBottomSheet = image => {
    BottomSheet.showBottomSheetWithOptions(
      {
        options: ['Home Screen', 'Lock Screen', 'Both', 'Cancel'],
        title: 'Set Wallpaper As',
        dark: false,
        cancelButtonIndex: 3,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          setIsLoading(true);
          setTimeout(() => {
            setWallpaper(image, TYPE.HOME);
          }, 100);
        } else if (buttonIndex === 1) {
          setIsLoading(true);
          setTimeout(() => {
            setWallpaper(image, TYPE.LOCK);
          }, 100);
        } else if (buttonIndex === 2) {
          setIsLoading(true);
          setTimeout(() => {
            setWallpaper(image, TYPE.BOTH);
          }, 100);
        }
      },
    );
  };

  return (
    <View style={styles.flex1}>
      <GridImage
        source={{uri: activeImage}}
        style={styles.itemImage}
        resizeMode={'cover'}
      />

      {isLoading == false ? (
        <TouchableOpacity
          onPress={() => {
            openBottomSheet(activeImage);
          }}
          style={styles.setButton}>
          <Text style={styles.buttonText}>Set</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => () => {}} style={styles.setButton}>
          <ActivityIndicator
            size="large"
            color="#6EDAA1"
            style={styles.spinner}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ImagePreview;
