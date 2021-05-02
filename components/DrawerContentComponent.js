import React from 'react';
import { Alert, Linking, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { prefix } from '../utils/constants';

const DrawerContentComponent = (props) => {
  const { drawerLabelStyle } = styles;

  const openUrlOnPhone = async (url) => {
    const urlIsValid = await Linking.canOpenURL(url);
    if (urlIsValid) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Impossible d\'ouvrir le lien.');
    }
  };

  return (
    <DrawerContentScrollView>
      <DrawerItem
        icon={() => <Ionicons name={`${prefix}-logo-github`} size={32} />}
        label="Mon Github"
        labelStyle={drawerLabelStyle}
        onPress={() => openUrlOnPhone('https://github.com/Mehdi-17')}
      />
      <DrawerItem
        icon={() => <Ionicons name={`${prefix}-logo-linkedin`} size={32} />}
        label="Mon Linkedin"
        labelStyle={drawerLabelStyle}
        onPress={() => openUrlOnPhone('https://www.linkedin.com/in/mehdi-serra-5a3489207/')}
      />
      <DrawerItem
        icon={() => <Ionicons name={`${prefix}-call`} size={32} />}
        label="M'appeler"
        labelStyle={drawerLabelStyle}
        onPress={() => Linking.openURL('tel:0672298391')}
      />
      <DrawerItem
        icon={() => <Ionicons name={`${prefix}-mail`} size={32} />}
        label="Envoyer un mail"
        labelStyle={drawerLabelStyle}
        onPress={() => Linking.openURL('mailto:mehdi.serra57@gmail.com')}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerLabelStyle: {
    fontSize: 20,
  },
});

export default DrawerContentComponent;
