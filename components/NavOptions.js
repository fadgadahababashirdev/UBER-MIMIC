import { FlatList, StyleSheet, Text, View , Image } from 'react-native';
import React from 'react';
import tailwind from 'twrnc';

const NavOptions = () => {
  const data = [
    {
      id: '123',
      title: 'Get a ride',
      image: 'https://links.papareact.com/3pn',
      screen: 'MapScreen',
    },
    {
      id: '456',
      title: 'Order food',
      image: 'https://links.papareact.com/28w',
      screen: 'EatsScreen', //change in future
    },
  ];
  return (
   <FlatList 
   data={data} 
   horizontal 
   renderItem={({item})=> {}}
   />
  );
};

export default NavOptions;
