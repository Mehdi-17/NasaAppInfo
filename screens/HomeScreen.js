import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import NasaDataResume from '../components/NasaDataResume';
import { categorylist } from '../utils/constants';

const HomeScreen = () => {
  const { container, HeyTextStyle, catchPhraseTextStyle, titleView, nasaDataContainer } = styles;

  const openCategoryScreen = (id) => {
    // TODO: Au clique, on ouvre le screen sur la bonne catégorie
    // Voir si on fait 3 screens différents ou si on fait un screen qu'on met à jour en fonction du touchable cliqué
    console.log('TouchableOpacity ID => ', id);
  };

  return (
    <View style={container}>
      <View style={titleView}>
        <Text style={HeyTextStyle}>
          Hey,
        </Text>
        <Text style={catchPhraseTextStyle}>
          Que souhaitez-vous consulter aujourd'hui ?
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
    alignItems: 'flex-start',
    marginLeft: '15%'
  },
  nasaDataContainer: {
    flexGrow: 2,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
  },
  HeyTextStyle: {
    color: 'black',
    fontFamily: 'PlayfairBlack',
    fontSize: 22,
  },
  catchPhraseTextStyle: {
    color: 'black',
    fontFamily: 'PlayfairRegular',
    fontSize: 16,
  },
});

export default HomeScreen;
