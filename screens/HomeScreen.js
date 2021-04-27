import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import NasaDataResume from '../components/NasaDataResume';

const categorylist = [
  { id: '1', categoryName: 'APOD' },
  { id: '2', categoryName: 'EPIC' },
  { id: '3', categoryName: 'AsteroidsNeWs' },
];

const HomeScreen = () => {
  const { container, textStyle, titleView, nasaDataContainer } = styles;

  return (
    <View style={container}>
      <View style={titleView}>
        <Text style={textStyle}>
          Bonjour, que souhaitez-vous consulter aujourd'hui ?{' '}
        </Text>
      </View>
      <View style={nasaDataContainer}>
        <NasaDataResume categorylist={categorylist} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  titleView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nasaDataContainer: {
    flexGrow: 2,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'PlayfairBlack',
    fontSize: 22,
  },
});

export default HomeScreen;
