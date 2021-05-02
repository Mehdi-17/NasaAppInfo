import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { appBackgroundColor, appSecondaryColor, titleAndDescriptionColor } from './utils/constants';
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';
import DrawerNavigatorScreen from './screens/DrawerNavigatorScreen';

const Stack = createStackNavigator();

// TODO: styliser le header, ajouter le bouton burger menu

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
        <Stack.Navigator
          screenOptions={(options) => {
            return {
              cardStyle: {
                backgroundColor: appBackgroundColor,
              },
              title: "Space Explorer",
              headerTitleStyle: styles.headerTitleStyle,
              headerStyle: styles.headerStyle,
            }
          }
          }
        >
          <Stack.Screen name="Drawer" component={DrawerNavigatorScreen} />
        </Stack.Navigator>
      </NavigationContainer >
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
  headerStyle: {
    backgroundColor: appBackgroundColor,
  },
  headerTitleStyle: {
    textAlign: 'center',
    fontFamily: 'PlayfairBlack',
    color: titleAndDescriptionColor,
    fontSize: 34
  }
});
