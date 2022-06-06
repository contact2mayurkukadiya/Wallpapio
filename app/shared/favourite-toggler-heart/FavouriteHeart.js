import React, {Component, useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './FavouriteHeart.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FavouriteHeart = props => {
  const [isFavourite, setIsFavourite] = useState(props.isFavourite);
  
  useEffect(() => {
    setIsFavourite(props.isFavourite);
  }, [props.isFavourite]);

  const toggleHeart = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        toggleHeart();
        props.onClick();
      }}
      style={props.style}>
      <Icon
        name={isFavourite ? props.selectedName : props.unSelectedName}
        size={props.size}
        color={isFavourite ? props.selectedColor : props.unSelectedColor}
      />
    </TouchableOpacity>
  );
};

export default FavouriteHeart;
