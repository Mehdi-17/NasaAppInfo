import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import NasaDataResume from '../components/NasaDataResume';
import { categorylist } from '../utils/constants';

const HomeScreen = () => {
  const { container, textStyle, titleView, nasaDataContainer } = styles;

  const openCategoryScreen = (id) => {
    //TODO Au clique, on ouvre le screen sur la bonne catégorie
    //Voir si on fait 3 screens différents ou si on fait un screen qu'on met à jour en fonction du touchable cliqué
    console.log('TouchableOpacity ID => ', id);
  };

  return (
    <View style={container}>
      <View style={titleView}>
        <Text style={textStyle}>
          Bonjour, que souhaitez-vous consulter aujourd'hui ?{' '}
        </Text>
      </View>
      <View style={nasaDataContainer}>
        <NasaDataResume
          categorylist={categorylist}
          openCategoryScreen={openCategoryScreen}
        />
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
    color: 'black',
    fontFamily: 'PlayfairBlack',
    fontSize: 22,
  },
});

export default HomeScreen;
