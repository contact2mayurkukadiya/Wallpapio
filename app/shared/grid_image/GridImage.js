import React, {Component, useState} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import styles from './GridImage.style';
import FastImage from 'react-native-fast-image';

/* export default class GridImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  render() {
    return (
      <View style={styles.imageContainer}>
        <FastImage
          source={this.props.source}
          style={this.props.style}
          resizeMode={this.props.resizeMode}
          onLoadStart={() => {
            this.setState({isLoading: true});
          }}
          onLoadEnd={() => {
            this.setState({isLoading: false});
          }}
          // defaultSource={require('../../assets/icons/loading.jpg')}
        />
        {this.state.isLoading == true ? (
          <ActivityIndicator
            size="large"
            color="#6EDAA1"
            style={styles.spinner}
          />
        ) : null}
      </View>
    );
  }
} */

const GridImage = props => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={styles.imageContainer}>
      <FastImage
        source={props.source}
        style={props.style}
        resizeMode={props.resizeMode}
        onLoadStart={() => {
          setIsLoading(true);
        }}
        onLoadEnd={() => {
          setIsLoading(false);
        }}
        // defaultSource={require('../../assets/icons/loading.jpg')}
      />
      {isLoading == true ? (
        <ActivityIndicator
          size="large"
          color="#6EDAA1"
          style={styles.spinner}
        />
      ) : null}
    </View>
  );
};

export default GridImage;
