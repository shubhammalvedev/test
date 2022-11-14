import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const details = props => {

  const storeData = async (value) => {
    try {
      let jsondata = JSON.stringify(value)
      await AsyncStorage.setItem('@xyz', jsondata)
      console.log('saved!');
    } catch (e) {
      // saving error
      console.log(e);
    }
  }

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@xyz')
    if(value !== null) {
      // value previously stored
      console.log('value:', value);
    }
  } catch(e) {
    console.log(e);
    // error reading value
  }
}

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details screen</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.replace('thirdscreen', {
            name: 'shubham',
            age: 26,
            occupation: 'Software engineer',
            company: 'Exteneded',
          });
        }}
        style={{
          height: 50,
          width: 200,
          backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white'}}>Go to next sreen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          let obj  = {
           number:232,name: 'shubham',andress:'Nagpur'  
          }
          storeData(obj)
        }}
        style={{margin: 10, padding: 10, backgroundColor: 'grey'}}>
        <Text style={{color: 'white'}}>Save to async storage</Text>
      </TouchableOpacity>

        <TouchableOpacity 
        style={{backgroundColor:"cyan", padding:10}}
        onPress={()=>getData()}>
          <Text>Get Data</Text>
        </TouchableOpacity>
      {/* <Text>{data?.title}</Text> */}
      {/* <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Approve_icon.svg/2048px-Approve_icon.svg.png',
        }}
        style={{height: 50, width: 50}}
      /> */}
    </View>
  );
};

export default details;
