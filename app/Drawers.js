import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutUs from './components/aboutus/AboutUs';
import Stacks from './Stacks';
const Drawer = createDrawerNavigator();

function Drawers() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Stacks">
        <Drawer.Screen name="Stacks" component={Stacks} />
        <Drawer.Screen name="About" component={AboutUs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Drawers;
