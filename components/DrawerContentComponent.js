import React from 'react';
import { StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { prefix } from '../utils/constants';

//TODO: utiliser Linking pour envoyer vers les liens de mes app

const DrawerContentComponent = (props) => {
  const { drawerLabelStyle } = styles;
  return (
    <DrawerContentScrollView>
      <DrawerItem
        icon={() => <Ionicons name={`${prefix}-logo-github`} size={32} />}
        label="Mon Github"
        labelStyle={drawerLabelStyle}
      />
      <DrawerItem
        icon={() => <Ionicons name={`${prefix}-logo-linkedin`} size={32} />}
        label="Mon Linkedin"
        labelStyle={drawerLabelStyle}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerLabelStyle: {
    fontSize: 24,
  },
});

export default DrawerContentComponent;
