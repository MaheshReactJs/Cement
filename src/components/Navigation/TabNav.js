import * as React from 'react';
import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/tabscreens/HomeScreen';
import SearchScreen from '../screens/tabscreens/SearchScreen';
import CartScreen from '../screens/tabscreens/CartScreen';
import ProfileScreen from '../screens/tabscreens/ProfileScreen';
import MoreScreen from '../screens/tabscreens/MoreScreen';
import CategoryScreen from '../screens/CategoryScreen';
import homeimage from '../../assests/images/home.png'
import ProductDetails from '../screens/ProductDetail'
import {useSelector} from 'react-redux';
import {scolor, pcolor, appname} from '../redux/selector/appinfoselector';
import AppinfoScreen from "../screens/AppinfoScreen"
const Tab = createBottomTabNavigator();


const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
  screenOptions={{
    headerShown: false,
  }}>
     {/* <HomeStack.Screen name="appinfo" component={AppinfoScreen} /> */}
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Category" component={CategoryScreen} />
    <HomeStack.Screen name="productdetail" component={ProductDetails} />
  </HomeStack.Navigator>
);

export default function TabNav() {
  const primary = useSelector(pcolor);
  const secondary = useSelector(scolor);
  const name = useSelector(appname);
  return (
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: secondary,
      inactiveTintColor: '#000000',
      style: {
        backgroundColor: '#FFFFFF',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }}
  >
      <Tab.Screen
         name="Home" 
         component={HomeStackScreen}
         options={{
            tabBarIcon: ({}) => (
              <Image
                source={require("../../assests/images/home.png")}
                resizeMode='contain'
                style={{width: 18.98, height: 18.6, tintColor: '#000000', borderColor: '#FF6969', opacity: 100 }} 
              />
            )
         }}
      />
      <Tab.Screen
         name="Search" 
         component={SearchScreen}
         options={{
          tabBarIcon: ({}) => (
            <Image
              source={require('../../assests/images/Search.png')}
              resizeMode='contain'
              style={{width: 17, height: 17, tintColor: '#000000', opacity: 100 }} 
            />
          )
       }} 
      />
      <Tab.Screen 
        name="Cart" 
        component={CartScreen}
        options={{
          tabBarIcon: ({}) => (
            <Image
              source={require('../../assests/images/shopping-cart.png')}
              resizeMode='contain'
              style={{width: 18.54, height: 18, tintColor: '#000000', borderColor: '#FF6969', opacity: 100 }} 
            />
          )
       }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarIcon: ({}) => (
            <Image
              source={require('../../assests/images/user.png')}
              resizeMode='contain'
              style={{width: 18, height: 18, tintColor: '#000000', borderColor: '#FF6969', opacity: 100 }} 
            />
          )
       }} 
      />
      <Tab.Screen 
        name="Settings" 
        component={AppinfoScreen}
        options={{
          tabBarIcon: ({}) => (
            <Image
              source={require('../../assests/images/bars.png')}
              resizeMode='contain'
              style={{width: 18, height: 15, borderColor: '#000000', opacity: 100 }} 
            />
          )
       }} 
      />
  </Tab.Navigator>
  );
}