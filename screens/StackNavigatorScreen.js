import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DisplayInfoScreen from './DisplayInfoScreen';
import HomeScreen from './HomeScreen';
import BurgerMenuButton from '../components/BurgerMenuButton';
import {appBackgroundColor, titleAndDescriptionColor} from '../utils/constants';

const Stack = createStackNavigator();

const StackNavigatorScreen = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={(options) => {
        return {
          title: "Space Explorer",
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
          headerLeft: () => (<BurgerMenuButton navigation={navigation} />)
        }
      }
      }
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name='DisplayInfo' component={DisplayInfoScreen} />
    </Stack.Navigator>

  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: appBackgroundColor,
  },
  headerTitleStyle: {
    textAlign: 'center',
    fontFamily: 'PlayfairBlack',
    color: titleAndDescriptionColor,
    fontSize: 34
  }
})

export default StackNavigatorScreen;
