import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  const { container, textStyle } = styles;

  return (
    <View style={container}>
      <Text style={textStyle}>Bonjour, que souhaitez-vous consulter aujourd'hui ? </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
  },
});

export default HomeScreen;
