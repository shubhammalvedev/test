import React, {useEffect, useState} from 'react';
import {
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  TextInput,
  StatusBar,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import {appColor} from '../components/Color';
import Icons from '../components/Icons';
import {styles} from '../components/Styles';
import {searchList, favArray} from '../api/redux/action/action-creator';

const {height, width} = Dimensions.get('window');

const SearchScreen = props => {
  const dispatch = useDispatch();
  const [breakingList, setBreakingList] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getList();
  }, []);

  const searchHandler = text => {
    setSearchText(text);
    getList(text);
  };

  const getList = text => {
    const data = {
      name: text,
    };
    dispatch(searchList(data)).then(res => {
      props.favArray(breakingList);
      if (res.searchListSuccess) {
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
      props.favArray(newArray);
    } else {
      breakingList[index].selectedItem = true;
      setBreakingList([...breakingList]);
      props.favArray(breakingList);
      var newArray = breakingList.filter(function (item) {
        return item.selectedItem == true;
      });
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
        <KeyboardAvoidingView>
        <View style={styles.inputContainer}>
          <TextInput
            value={searchText}
            placeholderTextColor="#ccc"
            placeholder="Search"
            onChangeText={searchHandler}
            style={styles.searchInputStyle}
          />
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Icons.Feather
              name="x"
              size={25}
              color={appColor.white}
              style={{marginRight: 20}}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={breakingList}
          contentContainerStyle={styles.searchResultFlatlist}
          keyExtractor={(item, index) => index.toString()}
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
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

function mapStateToProps(state) {
  return {
    isLoading: state.main.isLoading,
    badArrayList: state.main.badArrayList,
    favoriteArray: state.main.favoriteArray,
  };
}

export default connect(mapStateToProps, {searchList, favArray})(SearchScreen);
