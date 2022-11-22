import {Dimensions, StyleSheet} from 'react-native';
import {appColor} from './Color';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#000'},
  posts: {alignItems: 'center', justifyContent: 'space-between'},
  postOnpress: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {width: wp(45), height: hp(35), borderRadius: 5},
  imgDescriptionContainer: {
    width: wp(45),
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: wp(3),
  },
  username: {
    color: appColor.white,
    fontSize: 15,
    fontFamily: 'Roboto-Bold',
  },
  nickName: {
    color: appColor.white,
    fontSize: 12,
    fontFamily: 'Roboto-Thin',
  },
  iconStyle: {height: wp(6), width: wp(6)},
  headerContainer: {
    marginRight: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: '#242424',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10%',
  },
  searchInputStyle: {
    width: wp(90),
    marginLeft: wp(4),
    color: appColor.white,
    height: wp(10),
    fontSize: wp(4),
  },
  searchResultFlatlist: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  favFlatContainerStyle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  notFound: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  notFoundText: {
    fontSize: wp(4),
    color: appColor.white,
    fontFamily: 'Roboto-Bold',
  },
});
