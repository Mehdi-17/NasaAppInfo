import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { appBackgroundColor, appTheme, titleAndDescriptionColor } from './utils/constants';
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';
import DrawerNavigatorScreen from './screens/DrawerNavigatorScreen';
import BurgerMenuButton from './components/BurgerMenuButton';

const Stack = createStackNavigator();

// TODO: j'ai imbriqué les navigtaor dans le mauvais ordre. Pour avoir accès aux openDrawer etc,
// je dois imbriquer le stack nav dans le drawer, et pas l'inverse 
// https://reactnavigation.org/docs/nesting-navigators/

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
      <NavigationContainer theme={appTheme}>
        <Stack.Navigator
          screenOptions={(options) => {
            return {
              title: "Space Explorer",
              headerTitleStyle: styles.headerTitleStyle,
              headerStyle: styles.headerStyle,
              headerLeft: () => (<BurgerMenuButton />)
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
