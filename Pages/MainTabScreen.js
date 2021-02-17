import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen';

import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  
    <Tab.Navigator initialRouteName="Home" activeColor="#E6B0AA" barStyle={{backgroundColor:'white'}}>

    <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#E6B0AA',
          tabBarIcon: ({color}) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
   
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#E6B0AA',
          tabBarIcon: ({color}) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />

       
     
    </Tab.Navigator>
    
    
  );
  
  export default MainTabScreen;

  const HomeStackScreen = ({navigation}) =>{
    const {colors} = useTheme();

    return (
      <HomeStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#E6B0AA',
            shadowColor: colors.background, // iOS
            elevation: 0, // Android
          },
          headerTintColor: colors.text,
        }}>
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '',
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <Icon.Button
                  name="ios-menu"
                  size={25}
                  backgroundColor={'#E6B0AA'}
                  color={colors.text}
                  onPress={() => navigation.openDrawer()}
                />
              </View>
            ),
           
          }}
        />
        
      </HomeStack.Navigator>
    );
    
  }

  const ProfileStackScreen = ({navigation}) => {
    const {colors} = useTheme();
  
    return (
      <ProfileStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#E6B0AA',
            shadowColor: colors.background, // iOS
            elevation: 0, // Android
          },
          headerTintColor: colors.text,
        }}>
        <ProfileStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: '',
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <Icon.Button
                  name="ios-menu"
                  size={25}
                  backgroundColor={'#E6B0AA'}
                  color={colors.text}
                  onPress={() => navigation.openDrawer()}
                />
              </View>
            ),
            headerRight: () => (
              <View style={{marginRight: 10}}>
                <MaterialCommunityIcons.Button
                  name="account-edit"
                  size={25}
                  backgroundColor={'#E6B0AA'}
                  color={colors.text}
                  onPress={() => navigation.navigate('EditProfile')}
                />
              </View>
            ),
          }}
        />
        <ProfileStack.Screen
          name="EditProfile"
          options={{
            title: 'Edit Profile',
          }}
          component={EditProfileScreen}
        />
      </ProfileStack.Navigator>
    );
  };

  