/* ==================================
   NAME : ANOOP REDDY VANTERU
   
   ROLE : REACT NATIVE DEVELOPER 
   ==================================== */

///need to edit done for test////

import React, {memo, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {AppConstants} from '../../constants/appconstants';
import colors from '../../assests/styles/stylesheet/colors';
import {useSelector, useDispatch} from 'react-redux';
import {scolor, pcolor, appname} from '../redux/selector/appinfoselector';
import {
  responsiveHorizontalSize,
  responsiveVerticalSize,
  responsiveFontSize,
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../assests/styles/stylesheet/responsiveSize';
import {flexVariable} from '../../assests/styles/stylesheet/flexVariable';
import {fontFamily} from '../../assests/styles/stylesheet/fonts';


const Category = ({navigation}) => {
    const primary_color = useSelector(pcolor);
const secondary_color = useSelector(scolor);
// const app_name = useSelector(appname);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <SafeAreaView backgroundColor={colors.white}>
        <ScrollView>
          <View style={[styles.header,{ backgroundColor: primary_color}]}>
            {/* <TouchableOpacity>
                        <Image source={AppConstants.Shape} />
                    </TouchableOpacity> */}
            <View style={[styles.search]}>
              <View style={[styles.pv_1]}>
                {/* <TouchableOpacity>
                                <Image
                                    source={AppConstants.Search} />
                            </TouchableOpacity> */}
              </View>
              <View style={[styles.pv_1]}>
                {/* <TouchableOpacity>
                                <Image style={{ height: 30, width: 14 }}
                                    source={AppConstants.Notify} />
                            </TouchableOpacity> */}
              </View>
            </View>
          </View>
          <View style={[styles.pv2,{ backgroundColor:primary_color}]}>
            <Text style={[styles.title,{color: secondary_color}]}>Cement</Text>
          </View>
          <View style={styles.pv3}>
           
            <View style={styles.pv4}>
            <TouchableOpacity onPress={()=>{navigation.navigate('productdetail')}}>
              <Image source={AppConstants.Image1} style={[styles.img]} />
              <Text style={[styles.text],{color:secondary_color}}>Rs. 430.00</Text>
              <Text style={[styles.text],{color:secondary_color}}>Iron Rods</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.pv4}>
              <Image source={AppConstants.Image2} style={[styles.img]} />
              <Text style={[styles.text],{color:secondary_color}}>Rs. 300.00</Text>
              <Text style={[styles.text],{color:secondary_color}}>Iron Rods</Text>
            </View>
           
          </View>
          <View style={styles.pv3}>
            <View style={styles.pv4}>
              <Image source={AppConstants.Image3} style={[styles.img]} />
              <Text style={[styles.text],{color:secondary_color}}>Rs. 430.00</Text>
              <Text style={[styles.text],{color:secondary_color}}>Iron Rods</Text>
            </View>
            <View style={styles.pv4}>
              <Image source={AppConstants.Image4} style={[styles.img]} />
              <Text style={[styles.text],{color:secondary_color}}>Rs. 300.00</Text>
              <Text style={[styles.text],{color:secondary_color}}>Iron Rods</Text>
            </View>
          </View>
          <View style={styles.pv3}>
            <View style={styles.pv4}>
              <Image source={AppConstants.Image5} style={[styles.img]} />
              <Text style={[styles.text],{color:secondary_color}}>Rs. 430.00</Text>
              <Text style={[styles.text],{color:secondary_color}}>Cement</Text>
            </View>
            <View style={styles.pv4}>
              <Image source={AppConstants.Image6} style={[styles.img]} />
              <Text style={[styles.text],{color:secondary_color}}>Rs. 300.00</Text>
              <Text style={[styles.text],{color:secondary_color}}>Cement</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
   
    paddingTop: responsiveVerticalSize(3),
    paddingLeft: responsiveHorizontalSize(3),
    flexDirection: flexVariable.row,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '170%',
  },
  pv_1: {
    alignItems: 'center',
    justifyContent: flexVariable.center,
    paddingLeft: responsiveHorizontalSize(3),
  },
  pv2: {
    // paddingTop: responsiveVerticalSize(3),
    paddingBottom: responsiveVerticalSize(3),
    paddingLeft: responsiveHorizontalSize(3),
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  title: {
    fontFamily: fontFamily.segoeuiRegular,
    fontSize: responsiveFontSize(30),
    
  },
  pv3: {
    paddingTop: responsiveVerticalSize(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pv4: {
    paddingLeft: responsiveHorizontalSize(1),
    paddingRight: responsiveVerticalSize(1),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '50%',
  },
  text: {
    fontSize: responsiveFontSize(15),
    fontFamily: fontFamily.segoeuiLight,
  },
  img: {height: 180, width: 150},
});

export default memo(Category);
