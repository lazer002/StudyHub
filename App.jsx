import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import Home from './app/screen/Home';
import Profile from './app/screen/Profile';
import Wealth from './app/screen/Wealth';
import Liability from './app/screen/Liability';
import "./app/global.css"
import Settings from './app/screen/Settings';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, 
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Wealth') iconName = 'attach-money';
          else if (route.name === 'Liability') iconName = 'account-balance';
          else if (route.name === 'Profile') iconName = 'person';
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4CAF50', 
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Wealth" component={Wealth} />
      <Tab.Screen name="Liability" component={Liability} />
      <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>

    
  );
}









const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
