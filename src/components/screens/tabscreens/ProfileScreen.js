/* ==================================
   NAME : ANOOP REDDY VANTERU
   
   ROLE : REACT NATIVE DEVELOPER 
   ==================================== */ 


import React, { Component, memo } from "react";
import { 
  SafeAreaView, 
  StyleSheet, 
  View, 
  Text, 
  StatusBar, 
  TextInput, 
  Image, 
  TouchableOpacity, 
  ScrollView 
} from "react-native";
import { AppConstants } from '../../../constants/appconstants';
import colors from '../../../assests/styles/stylesheet/colors';

import {
  responsiveHorizontalSize,
  responsiveVerticalSize,
  responsiveFontSize
} from '../../../assests/styles/stylesheet/responsiveSize';
import { flexVariable } from '../../../assests/styles/stylesheet/flexVariable';
import { fontFamily } from '../../../assests/styles/stylesheet/fonts';
 


const ProfileScreen = ({ navigation }) => {
    return (
      <>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <SafeAreaView backgroundColor={colors.white}>
                <ScrollView >
                    <View style={[styles.header]}>
                        <TouchableOpacity>
                            <Image source={AppConstants.Back} />
                        </TouchableOpacity>
                        <View
                            style={[styles.pv_1]}>
                            <Image source={AppConstants.Notification} style={{ height: 30, width:14 }} />
                        </View>

                    </View>
                    <View style={[styles.pv2]}>
                        <Text style={[styles.title]}>
                           Profile
                        </Text>
                    </View>
                    <View style={[styles.textContainer]}>
                        <Text style={[styles.label]}>
                            Name
                        </Text>
                        <TextInput style={[styles.Textinput]}
                            placeholder="jhon"
                            selectTextOnFocus={false}
                            editable={false}
                            placeholderTextColor={colors.black}

                        />
                    </View>
                    <View style={[styles.textContainer]}>
                        <Text style={[styles.label]}>
                            Address Lane
                        </Text>
                        <TextInput style={[styles.Textinput]}
                            placeholder="hyderabad "
                            selectTextOnFocus={false}
                            editable={false}
                            placeholderTextColor={colors.black}

                        />
                    </View>
                    <View style={[styles.textContainer]}>
                        <Text style={[styles.label]}>
                            City
                        </Text>
                        <TextInput style={[styles.Textinput]}
                            placeholder="Hyderabad"
                            selectTextOnFocus={false}
                            editable={false}
                            placeholderTextColor={colors.black}
                        />
                    </View>
                    <View style={[styles.textContainer]}>
                        <Text style={[styles.label]}>
                            Gender
                        </Text>
                        <TextInput style={[styles.Textinput]}
                            placeholder="Male"
                            keyboardType="default"
                            selectTextOnFocus={false}
                            editable={false}
                            placeholderTextColor={colors.black}
                        />
                    </View>
                    <View style={[styles.textContainer]}>
                        <Text style={[styles.label]}>
                          Email
                        </Text>
                        <TextInput style={[styles.Textinput]}
                            placeholder="Example@gmail.com"
                            keyboardType="email-address"
                            selectTextOnFocus={false}
                            editable={false}
                            placeholderTextColor={colors.black}
                        />
                    </View>
                    <View style={[styles.textContainer]}>
                        <Text style={[styles.label]}>
                            Phone Number
                        </Text>
                        <TextInput style={[styles.Textinput]}
                            placeholder="1234567890"
                            maxLength={ 10 }
                            keyboardType="number-pad"
                            selectTextOnFocus={false}
                            editable={false}
                            placeholderTextColor={colors.black}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
  }

const styles = StyleSheet.create({
  header: {
    paddingTop: responsiveVerticalSize(3),
    paddingLeft: responsiveHorizontalSize(3),
    flexDirection: flexVariable.row
},
pv_1: {
    alignItems: flexVariable.flexEnd,
    width: '90%',
    justifyContent: flexVariable.center,
    paddingLeft: responsiveHorizontalSize(2),

},
pv2: {
    paddingTop: responsiveVerticalSize(2),
    paddingLeft: responsiveHorizontalSize(3)
},
title: {
    fontFamily: fontFamily.segoeuiRegular,
    fontSize: responsiveFontSize(30),
    color: colors.black
},
textContainer: {
    padding: 10,
    width: '98%',
},
label: {
    color: colors.dimGrey,
    alignSelf: flexVariable.flexStart,
    fontFamily: fontFamily.segoeuiRegular,
    fontSize: responsiveFontSize(18),
},
Textinput: {
    fontFamily: fontFamily.segoeuiRegular,
    fontSize: responsiveFontSize(16),
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    color: colors.black
}
});

export default ProfileScreen;