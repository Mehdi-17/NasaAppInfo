import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const NasaCategory = ({ categoryName }) => {
  const { container, titleCategoryStyle, descriptionCategoryStyle } = styles;
  return (
    <View style={container}>
      <Text style={titleCategoryStyle}>{categoryName}</Text>
      <Text style={descriptionCategoryStyle}>Description de la catégorie.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 400,
  },
  titleCategoryStyle: {
    color: 'white',
    fontFamily: 'PlayfairMedium',
    textAlign: 'center',
    fontSize: 20,
  },
  descriptionCategoryStyle: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'PlayfairItalic',
    textAlign: 'center',
  },
});
export default NasaCategory;
