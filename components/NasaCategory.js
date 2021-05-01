import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  appSecondaryColor,
  prefix,
  titleAndDescriptionColor,
} from '../utils/constants';
import { Ionicons } from '@expo/vector-icons';

const NasaCategory = ({
  categoryIconName,
  categoryId,
  categoryName,
  categoryDescription,
  openCategoryScreen,
}) => {
  const {
    titleCategoryStyle,
    descriptionCategoryStyle,
    touchableStyle,
    iconViewStyle,
  } = styles;

  return (
    <TouchableOpacity
      style={touchableStyle}
      onPress={() => openCategoryScreen(categoryId)}
    >
      <View>
        <View style={iconViewStyle}>
          <Ionicons
            name={`${prefix}-${categoryIconName}`}
            size={26}
            color={titleAndDescriptionColor}
          />
          <Text style={titleCategoryStyle}>{categoryName}</Text>
        </View>
        <Text style={descriptionCategoryStyle}>{categoryDescription}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  titleCategoryStyle: {
    color: titleAndDescriptionColor,
    fontFamily: 'PlayfairBlack',
    textAlign: 'center',
    fontSize: 24,
    marginLeft: 5,
  },
  descriptionCategoryStyle: {
    marginTop: 5,
    fontSize: 18,
    color: titleAndDescriptionColor,
    fontFamily: 'PlayfairItalic',
    textAlign: 'center',
  },
  touchableStyle: {
    width: 220,
    height: 350,
    padding: 5,
    marginHorizontal: 25,
    borderRadius: 35,
    backgroundColor: appSecondaryColor,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
});
export default NasaCategory;
