/* ==================================
   NAME : ANOOP REDDY VANTERU
   
   ROLE : REACT NATIVE DEVELOPER 
   ==================================== */ 



import React, { Component } from "react";
import { View,Text,StyleSheet,SafeAreaView, Image, Dimensions, ScrollView, ImageBackground,TouchableOpacity, TextInput } from "react-native";

// import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import {useSelector} from 'react-redux';
import {scolor, pcolor, appname} from '../../redux/selector/appinfoselector';

const { width, height } = Dimensions.get("screen");

const HomeScreen = ({  }) => {
  const primary = useSelector(pcolor);
  const secondary = useSelector(scolor);
  const name = useSelector(appname);
  const navigation = useNavigation();

  const txtstyle ={
    color:secondary
  }
   
    
    return (
        <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assests/images/top-img.png')}
          style={styles.backgroundImage}>
          <View style={styles.searchBarAlign}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#000"
            />
          </View>
        </ImageBackground>
        <View style={styles.elementGrid1}>
          <View style={styles.gridRow}>
            <View style={styles.element}>
            <TouchableOpacity onPress={() => navigation.navigate('Category')}>
              <Image
                source={require('../../../assests/images/Cement.png')}
                style={styles.Image}
              />
              <Text style={txtstyle} > Cement </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.element}>
              
              <Image
                source={require('../../../assests/images/steel.png')}
                style={styles.Image}
              />
              <Text style={txtstyle} onPress={() => navigation.navigate('Category')}>Steel</Text>
            </View>
            <View style={styles.element}>
              <Image
                source={require('../../../assests/images/3557_-_Nut_and_Bolt-512.png')}
                style={styles.Image}
              />
              <Text style={txtstyle} onPress={() => navigation.navigate('Category')}>
                Steel Hardwre
              </Text>
            </View>
          </View>

          <View style={styles.gridRow}>
            <View style={styles.element}>
              <Image
                source={require('../../../assests/images/building-materials-icons-set-simple-illustration-vector-web-style-114292831.png')}
                style={styles.Image}
              />
              <Text style={txtstyle} onPress={() => navigation.navigate('Category')}>Cement all</Text>
            </View>
            <View style={styles.element}>
              <Image
                source={require('../../../assests/images/iengrenages.png')}
                style={styles.Image}
              />
              <Text style={txtstyle} onPress={() => navigation.navigate('Category')}>
                Steel Hardwre
              </Text>
            </View>
            <View style={styles.element}>
              <Image
                source={require('../../../assests/images/Interior_Hardware_Fittings_Icon10.png')}
                style={styles.Image}
              />
              <Text style={txtstyle} onPress={() => navigation.navigate('Category')}>Offices</Text>
            </View>
          </View>
        </View>
        <View style={styles.popular}>
          <Text style={{fontSize: 16}}>Popular keywords</Text>
        </View>
        <View
          style={{
            width: '95%',
            height: 160,
            marginTop: 1,
            flex: 1,
            flexDirection: 'column',
            marginBottom: '5%',
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flex: 0.5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: '#CECDCB',
                width: '50%',
                height: 80,
              }}>
              <Image
                source={require('../../../assests/images/small_img.png')}
                style={{resizeMode: 'contain'}}
              />
              <View>
                <Text>Cement</Text>
                <Text>115 Products</Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: '#CECDCB',
                width: '50%',
                height: 80,
                marginLeft: 1,
              }}>
              <Image
                source={require('../../../assests/images/download_(1).png')}
                style={{resizeMode: 'contain'}}
              />
              <View>
                <Text>Cement</Text>
                <Text>1000 Products</Text>
              </View>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row', marginTop: 1}}>
            <View
              style={{
                flex: 0.5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: '#CECDCB',
                width: '100%',
                height: 80,
              }}>
              <Image
                source={require('../../../assests/images/download_(-3.png')}
                style={{resizeMode: 'contain'}}
              />
              <View>
                <Text>Cement</Text>
                <Text>1000Products</Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: '#CECDCB',
                width: '50%',
                height: 80,
                marginLeft: 1,
              }}>
              <Image
                source={require('../../../assests/images/Interior_Hardware_Fittings_Icon-1.png')}
                style={{resizeMode: 'contain'}}
              />
              <View>
                <Text>Steel</Text>
                <Text>1000 Products</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        fontSize: 14,
        color: '#989FA7',
      },
      backgroundImage: {
        width: '100%',
        height: 340,
      },
      searchBarAlign: {
        flex: 1,
        alignItems: 'center',
        marginTop: '2%',
      },
      searchInput: {
        width: '95%',
        height: 48,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        paddingLeft: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
      },
      elementGrid1: {
        width: '95%',
        height: 236,
        backgroundColor: '#ffffff',
        margin: '5%',
        flex: 1,
        flexDirection: 'column',
      },
      gridRow: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      element: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 3.3,
      },
      Image: {
        resizeMode: 'cover',
        marginTop: '5%',
      },
      popular: {
        width: '95%',
        height: 43,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
      },
    });

export default HomeScreen;