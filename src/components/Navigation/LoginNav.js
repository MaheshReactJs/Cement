import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../screens/login/Signin';
import Login from '../screens/login/Login';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import colors from '../../assests/styles/stylesheet/colors';
import MainNav from "./MainNav";

// import {app_info_action} from '../redux/action/appinfoaction';
// import {useSelector, useDispatch} from 'react-redux';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function loginscreen() {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      tabBarOptions={{
        activeTintColor: colors.white,
        inactiveTintColor: colors.brown,

        style: {
          backgroundColor: colors.themeColor,
        },
        labelStyle: {
          textAlign: 'center',
          //fontWeight:'bold',
          fontSize: 18,
          fontFamily: 'SegoeUI-Bold',
        },
        indicatorStyle: {
          borderBottomColor: colors.brown,
          borderBottomWidth: 2,
          //width:'20%',
        },
      }}>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: 'Login',
        }}
      />
      <Tab.Screen
        name="SignUp"
        component={Signin}
        options={{
          tabBarLabel: 'Sign up',
        }}
      />
    </Tab.Navigator>
  );
}

function LoginNav() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   function app(){
  //     const code ="1000"
  //     dispatch(
  //       app_info_action({
  //         code,
  //       }),
  //     );
  //   }
  //   app()

  // }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="signin" component={loginscreen} /> */}
        {/* <Stack.Screen name="sample" component={Sample}/> */}
        <Stack.Screen name="main" component={MainNav} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoginNav;

