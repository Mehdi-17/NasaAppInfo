import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  appBackgroundColor,
  titleAndDescriptionColor,
} from '../utils/constants';

const NasaCategory = ({ categoryName, categoryDescription }) => {
  const { titleCategoryStyle, descriptionCategoryStyle } = styles;
  return (
    <View>
      <Text style={titleCategoryStyle}>{categoryName}</Text>
      <Text style={descriptionCategoryStyle}>{categoryDescription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleCategoryStyle: {
    color: titleAndDescriptionColor,
    fontFamily: 'PlayfairBlack',
    textAlign: 'center',
    fontSize: 24,
  },
  descriptionCategoryStyle: {
    marginTop: 5,
    fontSize: 18,
    color: titleAndDescriptionColor,
    fontFamily: 'PlayfairItalic',
    textAlign: 'center',
  },
});
export default NasaCategory;
