import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {appBackgroundColor} from './utils/constants';
import HomeScreen from './screens/HomeScreen';
import {useFonts} from 'expo-font';

//TODO: utiliser usefonts pour mettre les fonts

const {Navigator, Screen} = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions ={(options) =>{
        return {
          cardStyle:{backgroundColor: appBackgroundColor},
          headerShown: false,
        }
      }}>
        <Screen name='Home' component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
