import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Pages/Login';
import Main from './Pages/Main';
import NewAccount from './Pages/NewAccount';
import ProfileScreen from './Pages/ProfileScreen';
import MainTabScreen from './Pages/MainTabScreen';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName = 'Home'>
        <Drawer.Screen name = 'Home' component ={MainTabScreen} ></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>

  );
}
