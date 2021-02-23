import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Pages/Login';
import ParentAccount from './Pages/ParentAccount';
import ProfileScreen from './Pages/ProfileScreen';
import MainTabScreen from './Pages/MainTabScreen';
import KindergartenAccount from './Pages/KindergartenAccount';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Pages/HomeScreen';
const Drawer = createDrawerNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName = 'Home'>
        <Drawer.Screen name = 'Home' component ={KindergartenAccount} ></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>

  );
}
