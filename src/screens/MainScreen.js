import React, {useEffect, useState} from 'react';
import {
  Text,
  FlatList,
  SafeAreaView,
  StatusBar,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {appColor} from '../components/Color';
import Icons from '../components/Icons';
import Loader from '../components/Loader';
import {styles} from '../components/Styles';
import {breakingBadList, favArray} from '../api/redux/action/action-creator';

const MainScreen = props => {
  const dispatch = useDispatch();
  const [breakingList, setBreakingList] = useState('');
  const [favList, setFavList] = useState('');

  useEffect(() => {
    getListData();
  }, []);

  const renderLoader = () => {
    if (props.isLoading) {
      return <Loader visible={true} />;
    }
  };
  const getListData = () => {
    dispatch(breakingBadList()).then(res => {
      props.favArray(breakingList);
      if (res.breakingBadListSuccess) {
        var newData = [...res.data];
        newData.forEach(function (file) {
          file.selectedItem = false;
        });
        setBreakingList(newData);
      }
    });
  };

  const handleLikeClick = (item, index) => {
    if (item.selectedItem) {
      breakingList[index].selectedItem = false;
      setBreakingList([...breakingList]);
      var newArray = breakingList.filter(function (item) {
        return item.selectedItem == true;
      });
      setFavList(newArray);
      props.favArray(newArray);
    } else {
      breakingList[index].selectedItem = true;
      setBreakingList([...breakingList]);
      props.favArray(breakingList);
      var newArray = breakingList.filter(function (item) {
        return item.selectedItem == true;
      });
      setFavList(newArray);
      props.favArray(newArray);
    }
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={breakingList}
          contentContainerStyle={styles.posts}
          keyExtractor={(item) => item.char_id}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  props.navigation.navigate('Details', {item: item});
                }}
                style={styles.postOnpress}>
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
                  <TouchableOpacity
                    onPress={() => {
                      handleLikeClick(item, index);
                    }}>
                    {item.selectedItem ? (
                      <Icons.AntDesign
                        name="heart"
                        size={20}
                        color={appColor.green}
                      />
                    ) : (
                      <Icons.AntDesign name="hearto" size={20} color="grey" />
                    )}
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
        />

        {renderLoader()}
      </SafeAreaView>
    </>
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: 'The Breaking Bad',
    headerRight: () => (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            navData.navigation.navigate('SearchScreen');
          }}>
          <Icons.Feather
            name="search"
            size={25}
            color={appColor.white}
            style={{marginRight: 25}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navData.navigation.navigate('Favourites');
          }}>
          <Image
            source={require('../assets/active_heart.png')}
            style={styles.iconStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
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

export default connect(mapStateToProps, {breakingBadList, favArray})(
  MainScreen,
);
