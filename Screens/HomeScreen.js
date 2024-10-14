import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import tailwind from 'twrnc';
const HomeScreen = () => {
  return (
    <View style={tailwind`bg-white h-full`}>
     <View>UBER</View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: 'blue',
  },
});
