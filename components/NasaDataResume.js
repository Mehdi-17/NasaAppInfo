import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import NasaCategory from './NasaCategory';

// TODO: voir pour l'effet d'élévation sur le touchable opacity
// Continuer l'implémentation des catégories

const NasaDataResume = ({ categorylist }) => {
  const { touchableStyle } = styles;
  const renderList = ({ item }) => {
    return (
      <TouchableOpacity style={touchableStyle}>
        <NasaCategory categoryName={item.categoryName} />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={{ flex: 1 }}
      data={categorylist}
      horizontal={true}
      renderItem={renderList}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  touchableStyle: {
    marginHorizontal: 25,
    borderRadius: 35,
    backgroundColor: '#05005C',
    //borderWidth: 1,
    //borderColor: 'yellow',
  },
});
export default NasaDataResume;
