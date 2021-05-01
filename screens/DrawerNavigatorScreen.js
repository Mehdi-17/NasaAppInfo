import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import DrawerContentComponent from '../components/DrawerContentComponent';

const Drawer = createDrawerNavigator();
//    a mettre quand j'aurai mis le menu burger dans les screen options :
// options={{ drawerLockMode: 'locked-closed' }}

const DrawerNavigatorScreen = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContentComponent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorScreen;
