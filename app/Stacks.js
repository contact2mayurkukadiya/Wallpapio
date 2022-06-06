import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tabs';
import ImagePreview from './components/image-preview/ImagePreview';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={({navigation, route}) => ({
          animationEnabled: true,
          title: 'WallChamp',
          headerTitleAlign: 'center',
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.openDrawer();
                }}>
                <Icon name="menu" size={30} style={styles.headerButton} />
              </TouchableOpacity>
            );
          },
        })}
      />
      <Stack.Screen
        name="ImgagePreview"
        component={ImagePreview}
        options={({navigation, route}) => ({
          animationEnabled: true,
          title: 'WallChamp',
          headerTitleAlign: 'center',
          // headerTransparent: true,
          // headerBackground = () => {
          //   return <View style={styles.header}></View>
          // }

          // headerStyle: {
          //   backgroundColor: 'rgba(0,0,0,0.5)'
          // }
          
          /* headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.openDrawer();
                }}>
                <Icon name="menu" size={30} style={styles.headerButton} />
              </TouchableOpacity>
            );
          }, */
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    marginHorizontal: 10,
  },
  header:{
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
});

export default Stacks;
