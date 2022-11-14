import React, {useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

let indexes = '';
const thirdscreen = (props) => {
  const array = [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
    'item6',
    'item7',
    'item8',
  ];

  const filterIndex = () => {
    indexes = array.indexOf('item2');
    console.log('indexes------->', indexes);
  };

  useEffect(() => {
    filterIndex();
    console.log('are we getting any value:', props?.route?.params);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontWeight:"bold",fontSize:30}}>third vali screen</Text>
        <Text> Name :{props?.route?.params?.name}</Text>
        <Text> Age :{props?.route?.params?.age}</Text>
        <Text> Occupation :{props?.route?.params?.occupation}</Text>
        <Text> Company :{props?.route?.params?.company}</Text>
    </View>
  );
};

export default thirdscreen;
