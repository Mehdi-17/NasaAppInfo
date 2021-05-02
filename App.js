import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { appBackgroundColor, statusBarHeight } from './utils/constants';
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';
import DrawerNavigatorScreen from './screens/DrawerNavigatorScreen';

const Stack = createStackNavigator();

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
                paddingTop: statusBarHeight,
              },
              headerShown: false,
            };
          }}
        >
          <Stack.Screen name="Drawer" component={DrawerNavigatorScreen} />
        </Stack.Navigator>
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
