import React from 'react';
import { FlatList } from 'react-native';
import NasaCategory from './NasaCategory';

const NasaDataResume = ({ categorylist, openCategoryScreen }) => {
  const renderList = ({ item }) => {
    return (
      <NasaCategory
        key={item.id}
        categoryIconName = {item.iconName}
        categoryId={item.id}
        categoryName={item.categoryName}
        categoryDescription={item.categoryDescription}
        openCategoryScreen={openCategoryScreen}
      />
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

export default NasaDataResume;
