import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import login from './screens/login';
import shop from './screens/shop';
export default function App() 
{
  const mainNavigator = createStackNavigator();

  return (
    <View style={{flex:1}}>
        <NavigationContainer>
            <mainNavigator.Navigator screenOptions={{headerShown:false}} initialRouteName="login">
                <mainNavigator.Screen name="login" component ={login} />
                <mainNavigator.Screen name="shop" component ={shop} />
            </mainNavigator.Navigator>
        </NavigationContainer>
    </View> 
   
  );
}

