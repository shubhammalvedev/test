import React, {useEffect, useRef, useState} from 'react';
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Animated,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import * as Animatable from 'react-native-animatable';

//send props as a parameter in main function
const home = (props) => {
  const fad = useRef(new Animated.Value(0)).current;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ModalVisible, setModalVisible] = useState(false);
  var a = ' ';

  useEffect(() => {
    Animated.timing(fad, {
      toValue: 1,
      duration: 5000,
    });
  }, [fad]);
  const customModal = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Modal animationType="slide" transparent={true} visible={ModalVisible}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(255,255,255,0.5)',
              margin: 10,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 100,
                width: 200,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
                elevation: 5,
                borderRadius: 10,
              }}>
              <Text style={{color: 'white'}}>User Login Successfully!</Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  props.navigation.navigate('DrawerScreens');
                }}
                style={{
                  margin: 10,
                  padding: 10,
                  backgroundColor: 'green',
                  borderRadius: 10,
                }}>
                <Text style={{color: 'white'}}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  return (
    <View>
      <ImageBackground
        source={require('./images/bg.jpeg')}
        style={{height: '100%', width: '100%'}}
        resizeMode={'stretch'}>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'cyan',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{margin: 10, fontSize: 50, color: 'white'}}>Login</Text>

          <TextInput
            value={email}
            placeholder="Enter the Email"
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'white',
              marginVertical: 10,
              borderRadius: 10,
              elevation: 10,
            }}
            onChangeText={text => {
              setEmail(text);
            }}
          />

          <TextInput
            secureTextEntry={true}
            placeholder="Enter the Password"
            onChangeText={text => {
              setPassword(text);
            }}
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'white',
              elevation: 10,
              borderRadius: 10,
            }}
          />

          <View
          animation="flash"
          iterationCount="infinite"
          easing="ease-out"
            >
            <TouchableOpacity
              style={{
                height: 30,
                width: 80,
                margin: 10,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                elevation: 10,
              }}
              onPress={() => {
                ///if both conditions in case of && is true then code or statment will execute
                if (email != '' && password != '') {
                  setModalVisible(true);
                }
              }}>
              <Text style={{color: 'white'}}>Submit</Text>
              {/* <AntDesign name='login' size={20} style={{color:"white"}} /> */}
              {/* <Entypo name="user" size={20} style={{color: 'white'}} /> */}
            </TouchableOpacity>
            
          </View>
          <TouchableOpacity
              style={{
                height: 30,
                width: 80,
                margin: 10,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                elevation: 10,
              }}
              onPress={() => {
              props.navigation.navigate('ContextApiScreen')
               
              }}>
              <Text style={{color: 'white'}}>Next screen</Text>
              {/* <AntDesign name='login' size={20} style={{color:"white"}} /> */}
              {/* <Entypo name="user" size={20} style={{color: 'white'}} /> */}
            </TouchableOpacity>
        </View>
      </ImageBackground>
      {customModal()}
    </View>
  );
};

export default home;
