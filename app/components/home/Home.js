import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import * as constants from '../../constants';
import styles from './Home.style';
import GridImage from '../../shared/grid_image/GridImage';
import FavouriteHeart from '../../shared/favourite-toggler-heart/FavouriteHeart';
import {getData, setData} from '../../helper';

const Home = props => {
  const [list, setList] = useState(constants.ImageList);

  useEffect(() => {
    setList(constants.ImageList);
  }, [constants.ImageList]);

  return (
    <SafeAreaView style={styles.flex1}>
      <View style={styles.flex1}>
        <FlatList
          data={list}
          keyExtractor={(item, index) => index.toString()}
          // horizontal
          // showsHorizontalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={{padding: 10}}
          renderItem={({item, index}) => {
            return (
              <View style={[styles.flex1, styles.itemContainer]}>
                <TouchableWithoutFeedback
                  onPress={() => itemClicked(props, item.image, index, list)}>
                  <View style={styles.imageItem}>
                    <GridImage
                      source={{uri: item.image}}
                      style={styles.itemImage}
                      resizeMode={'cover'}
                    />
                  </View>
                </TouchableWithoutFeedback>
                <FavouriteHeart
                  size={30}
                  selectedName={'heart'}
                  unSelectedName={'heart-outline'}
                  selectedColor={'red'}
                  unSelectedColor={'rgba(255,225,255,0.7)'}
                  style={styles.favIcon}
                  isFavourite={item.isFavourite}
                  onClick={() => toggleFavourite(item, index)}
                />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const itemClicked = (props, item, index, list) => {
  props.navigation.navigate('ImgagePreview', {
    item: item,
    index: index,
    list: list,
  });
};

const toggleFavourite = (item, index) => {
  // console.log('Favourite item', item);
  let fvl = getData('fvl');
  if (fvl && fvl != null) {
    fvl = JSON.parse(fvl);
    fvl.push(item);
    setData('fvl', JSON.stringify(fvl));
  } else {
    setData('fvl', JSON.stringify([item]));
  }
};

export default Home;
