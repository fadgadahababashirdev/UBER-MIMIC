import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import tailwind from 'twrnc';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const NavOptions = () => { 
  const navigation = useNavigation()
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
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity 
        onPress={()=> navigation.navigate(item.screen)}
        style={tailwind`p-2 pl-6 pb-8  bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              source={{ uri: item.image }}
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
            ></Image>
            <Text style={tailwind `mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon style={tailwind`p-2 bg-black rounded-full w-10  mt-4`} name="arrowright" color="white" type="antdesign"/>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
