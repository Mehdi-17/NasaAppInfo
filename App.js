import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { appBackgroundColor, statusBarHeight } from './utils/constants';
import HomeScreen from './screens/HomeScreen';
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(false);

  const loadRessources = async () => {
    try {
      await Font.loadAsync({
        PlayfairBlack: require('./assets/PlayfairDisplay-Black.ttf'),
        PlayfairItalic: require('./assets/PlayfairDisplay-Italic.ttf'),
        PlayfairMedium: require('./assets/PlayfairDisplay-Medium.ttf'),
        PlayfairRegular: require('./assets/PlayfairDisplay-Regular.ttf'),
      });
      setLoading(true);
    } catch (e) {
      console.error("Erreur durant le chargement des polices d'écriture :", e);
    }
  };

  useEffect(() => {
    loadRessources();
  }, []);

  if (loading) {
    return (
      <NavigationContainer>
        <Navigator
          screenOptions={(options) => {
            return {
              cardStyle: { backgroundColor: appBackgroundColor, paddingTop: statusBarHeight },
              headerShown: false,
            };
          }}
        >
          <Screen name="Home" component={HomeScreen} />
        </Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
