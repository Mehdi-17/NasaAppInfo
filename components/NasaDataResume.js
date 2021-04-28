import React from 'react';
import { StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import NasaCategory from './NasaCategory';

const NasaDataResume = ({ categorylist, openCategoryScreen }) => {
  const { touchableStyle } = styles;
  const renderList = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={touchableStyle}
        onPress={() => openCategoryScreen(item.id)}
      >
        <NasaCategory
          categoryName={item.categoryName}
          categoryDescription={item.categoryDescription}
        />
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
    width: 200,
    height: 400,
    padding: 5,
    marginHorizontal: 25,
    borderRadius: 35,
    backgroundColor: '#B0C2B8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
});
export default NasaDataResume;
