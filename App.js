import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import home from './home';
import details from './details';
import thirdscreen from './thirdscreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image,Button } from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ContextApiScreen from "./ContextApiScreen";
import ChildScreen from './ChildScreen'
const Toptab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();


const DrawerScreens = ()=>{
  return(
    // <NavigationContainer>
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen options={{title:"Details screen"}} name='details' component={details}/>
      <Drawer.Screen name='thirdscreen' component={thirdscreen}/>
      <Drawer.Screen
          name="TopTab"
          component={TopTab}
          options={{title: 'Home Tabs'}}
        />
    {/* <Drawer.Screen name="MyTabs" component={MyTabs} /> */}
    </Drawer.Navigator>
    // </NavigationContainer>
  )
}
const TopTab = () => {
  return (
    <Toptab.Navigator>
      <Toptab.Screen name="thirdscreen" component={thirdscreen} />
      <Toptab.Screen name="details" component={details} />
    </Toptab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const Tabbar = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tabbar.Navigator>
      <Tabbar.Screen
        name="thirdscreen"
        component={thirdscreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => {
            return (
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Approve_icon.svg/2048px-Approve_icon.svg.png',
                }}
                style={{height: 20, width: 20}}
              />
            );
          },
        }}
      />
      <Tabbar.Screen
        name="details"
        component={details}
        options={{
          tabBarLabel: 'DETAILS',
          tabBarIcon: () => {
            return (
              <Image
                source={{
                  uri: 'https://iconscout.com/ms-icon-310x310.png',
                }}
                style={{height: 20, width: 20}}
              />
            );
          },
        }}
      />
    </Tabbar.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="home"
          component={home}
          options={{
            title: 'ABCD',
            headerStyle: {
              backgroundColor: 'cyan',
            },
            headerTintColor: 'red',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:30
            },
            headerRight: () => (
              <Button title="Update" />
            ),
          }}
        />
        {/* <Stack.Screen name="details" component={details} /> */}
        <Stack.Screen name="thirdscreen" component={thirdscreen} />       
        <Stack.Screen name="DrawerScreens" component={DrawerScreens}/>
        <Stack.Screen name = "ContextApiScreen" component={ContextApiScreen}/>
        <Stack.Screen name = "ChildScreen" component={ChildScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
