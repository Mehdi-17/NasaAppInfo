import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { appTheme } from './utils/constants';
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContentComponent from './components/DrawerContentComponent';
import StackNavigatorScreen from './screens/StackNavigatorScreen';

const Drawer = createDrawerNavigator();

export default function App(props) {
  const [loading, setLoading] = useState(false);
  const navigation = props.navigation;

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
        <Drawer.Navigator
          drawerContent={() => <DrawerContentComponent />}
          options={{ drawerLockMode: 'locked-closed' }}
          
        >

          <Drawer.Screen name="StackNavigator" component={StackNavigatorScreen} options={{navigation : navigation}} />
        </Drawer.Navigator>
      </NavigationContainer >
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
