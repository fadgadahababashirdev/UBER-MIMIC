import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tailwind from 'twrnc';
import NavOptions from '../components/NavOptions';
import MapScreen from './MapScreen';
const HomeScreen = () => {
  return (
    <View style={tailwind`bg-white`}>
      <View>
        <Image
          source={{
            uri: 'https://download.logo.wine/logo/Uber/Uber-Logo.wine.png',
          }}
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
        ></Image>
        <NavOptions />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: 'blue',
  },
});
