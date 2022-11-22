import React, {useEffect, useState} from 'react';
import {
  Text,
  FlatList,
  SafeAreaView,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {appColor} from '../components/Color';
import Icons from '../components/Icons';
import {styles} from '../components/Styles';
import {favArray} from '../api/redux/action/action-creator';

const Favourites = props => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />

      <SafeAreaView style={{...styles.container, alignItems: 'center'}}>
        {props.favoriteArray != '' ? (
          <FlatList
            data={props.favoriteArray}
            contentContainerStyle={styles.favFlatContainerStyle}
            keyExtractor={(item, index) => index.toString()}
            style={{alignSelf: 'flex-start'}}
            numColumns={2}
            renderItem={({item, index}) => {
              // console.log("item.img", breakingList);
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    props.navigation.navigate('Details', {item: item});
                  }}
                  style={{margin: 10}}>
                  <Image
                    source={{uri: item.img}}
                    style={styles.imgStyle}
                    resizeMode="cover"
                  />
                  <View style={styles.imgDescriptionContainer}>
                    <View>
                      <Text style={styles.username}>{item.name}</Text>
                      <Text style={styles.nickName}>{item.nickname}</Text>
                    </View>
                    <View>
                      <Icons.AntDesign
                        name="heart"
                        size={20}
                        color={appColor.green}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        ) : (
          <View style={styles.notFound}>
            <Text style={styles.notFoundText}>No Data found</Text>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: 'Favourites',
    headerLeft: null,
    headerTintColor: appColor.green,
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navData.navigation.goBack();
        }}>
        <Icons.Feather
          name="x"
          size={25}
          color={appColor.white}
          style={{marginRight: 20}}
        />
      </TouchableOpacity>
    ),
  };
};

function mapStateToProps(state) {
  return {
    isLoading: state.main.isLoading,
    badArrayList: state.main.badArrayList,
    favoriteArray: state.main.favoriteArray,
  };
}

export default connect(mapStateToProps, {favArray})(Favourites);
