import React, {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableWithoutFeedback,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import styles from './Gallary.style';
import GridImage from '../../shared/grid_image/GridImage';
import NoDataFoundComponent from '../../shared/no-data-found-component/NoDataFoundComponent';

const Gallary = ({navigation}) => {
  const [list, setList] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(null);
  const [pageSize, setPageSize] = useState(50);
  const [cursor, setCursor] = useState(0);
  const [isNextPage, setIsNextPage] = useState(false);

  useFocusEffect(
    // If we not use below useCallback fuction then this useFocusEffect hook call continuously
    React.useCallback(() => {
      AskForPermission();
    }, []),
  );

  const AskForPermission = async () => {
    if (Platform.OS === 'android') {
      const storagePermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
      if (!storagePermission) {
        const result = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Permission',
            message: 'we would like to access your photos!',
          },
        );
        if (result == PermissionsAndroid.RESULTS.GRANTED) {
          await getGallaryImages();
        } else {
          console.log('Access to pictures was denied');
          return;
        }
      }else{
        await getGallaryImages();
      }
    }
  };

  const getGallaryImages = () => {
    if (isNextPage == true || cursor === 0) {
      CameraRoll.getPhotos({
        first: pageSize,
        after: cursor.toString(),
        assetType: 'Photos',
      })
        .then(res => {
          setList(cursor === 0 ? res.edges : [...list, ...res.edges]);
          setIsNextPage(res.page_info.has_next_page);
          setCursor(res.page_info.end_cursor);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const itemClicked = (item, index) => {
    navigation.navigate('ImgagePreview', {
      item: item,
      index: index,
      list: list,
    });
  };

  return (
    <SafeAreaView style={styles.flex1}>
      <View style={styles.flex1}>
        {list && list.length > 0 ? (
          <FlatList
            data={list}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={() => getGallaryImages()}
            onEndThreshold={0}
            refreshing={isRefreshing}
            numColumns={2}
            contentContainerStyle={{padding: 10}}
            renderItem={({item, index}) => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => itemClicked(item.node.image.uri, index, list)}>
                  <View style={styles.imageItem}>
                    <GridImage
                      source={{uri: item.node.image.uri}}
                      style={styles.itemImage}
                      resizeMode={'cover'}
                    />
                  </View>
                </TouchableWithoutFeedback>
              );
            }}
          />
        ) : (
          <NoDataFoundComponent title="No Image Access." />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Gallary;
