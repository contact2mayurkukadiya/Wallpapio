import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './components/home/Home';
import Gallary from './components/gallary/Gallary';
import Favourite from './components/favourite/Favourite';
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="none"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'view-grid' : 'view-grid';
          } else if (route.name === 'Gallary') {
            iconName = focused ? 'folder-image' : 'folder-image';
          } else if (route.name === 'Favourite') {
            iconName = focused ? 'cards-heart' : 'cards-heart';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#6edaa1',
        inactiveTintColor: '#26333d',
      }}>
      <Tab.Screen
        name="Gallary"
        component={Gallary}
        options={{
          title: 'Gallary',
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          title: 'Favourite',
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default Tabs;
