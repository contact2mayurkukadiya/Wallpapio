import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NoDataFoundComponent = ({title}) => {
  return (
    <View style={styles.noDataFoundPlaceHolderContainer}>
      <Text style={styles.noDataFoundPlaceHolder}>
        {title != null && title != '' ? title : 'No Data Found'}
      </Text>
    </View>
  );
};

export default NoDataFoundComponent;

const styles = StyleSheet.create({
  noDataFoundPlaceHolderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  noDataFoundPlaceHolder: {
    fontSize: 18,
    color: 'gray',
  },
});
